import React, {useReducer} from "react";

const buildContextRedux = (initialStore, reducer) => {
    const Context = React.createContext();

    const provider = (stateCallback, dispatchCallback) => {
        return (WrappedComponent) => {
            return (props) => {
                const [state, dispatch] = useReducer(reducer, initialStore);
                const propsFromStore = stateCallback(state);
                const propsActions = dispatchCallback(dispatch);
                const nextProps = {...props,...propsFromStore, ...propsActions};
                return (
                    <Context.Provider value={{state, dispatch}}>
                        <WrappedComponent {...nextProps} />
                    </Context.Provider>
                )
            }
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