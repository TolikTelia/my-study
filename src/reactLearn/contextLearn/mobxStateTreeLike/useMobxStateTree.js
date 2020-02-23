import React, {useState} from "react";

const useMobxStateTree = (initialState, actions) => {
    const [state, setState] = useState({...initialState});
    const proxySelf = new Proxy(state,  {
        set(target, prop, val){
            setState(state => ({
                ...state,
                [prop]: val
            }));
            return true
        }
    });
    return {...proxySelf, ...actions(proxySelf)};
};

const buildContextMST = (initState, actions) => {
    const Context = React.createContext();
    const provider = (WrappedComponent) => {
        return (props) => {
            const store = useMobxStateTree(initState, actions);
            return (
                <Context.Provider value={store}>
                    <WrappedComponent {...props} />
                </Context.Provider>
            )
        }
    };
    const consumer = (WrappedComponent) => {
        return (props) => (
            <Context.Consumer>
                {(context) => <WrappedComponent {...props} store={context}/>}
            </Context.Consumer>
        )
    };

    return [
        Context,
        provider,
        consumer
    ]
};

export default buildContextMST