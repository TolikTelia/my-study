import React, {useEffect} from 'react';
import {connect} from 'react-redux'

const ReduxLearn = ({store, addBanner, search, setSearch}) => {

    useEffect(() => {
        console.log(search);
    }, [search]);

    return (
        <div className="App">
            <input type="text" value={search} onChange={event => {setSearch(event.target.value)}}/>
            <ul>
                {store.bannersList.filter(item => (
                    <li key={item}>{item.banner}</li>
                ))}
            </ul>
        </div>
    );
};

export default connect(
    state => ({store: state, search: state.search}),
    dispatch => ({
        addBanner(banner) {
            const payload = {
                id: Date.now().toString(),
                banner
            };
            dispatch({type:'ADD_BANNER', payload: payload});
        },
        setSearch(value) {
            dispatch({type: 'SET_SEARCH',payload: value})
        }
    })
)(ReduxLearn);

