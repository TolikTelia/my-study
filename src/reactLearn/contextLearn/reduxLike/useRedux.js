import React, {useReducer} from "react";

const buildContextRedux = () => {
    const Context = React.createContext();

    const provider = (WrappedComponent) => {
        return (props) => {
            const [state, dispatch] = useReducer(reducer, initialStore);
            return (
                <Context.Provider value={{state, dispatch}}>
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

export default buildContextRedux