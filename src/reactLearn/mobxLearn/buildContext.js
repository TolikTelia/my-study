import React from "react";
import { useLocalStore } from 'mobx-react'

export const buildContext = (store) => {
    const Context = React.createContext();
    const provider = (WrappedComponent) => {
        return (props) => {
            const myStore = useLocalStore(() => (
                {
                    //properties
                    bugs: ['juck'],

                    // views
                    get bugsLength() {
                        return myStore.bugs.length
                    },

                    // actions
                    addBug: (bug) => {
                        myStore.bugs.push(bug);
                    }
                }
            ));
            return (
                <Context.Provider value={myStore}>
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