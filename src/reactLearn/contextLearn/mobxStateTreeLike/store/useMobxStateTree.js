import React, { useReducer } from "react";

const useMobxStateTree = (initialState, actions) => {
    const reducer = (state, action) => {
        console.log(action);
        return {...state, ...action}
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const proxySelf = new Proxy(state,  {
        set(target, prop, val){
            dispatch({[prop]: val});
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