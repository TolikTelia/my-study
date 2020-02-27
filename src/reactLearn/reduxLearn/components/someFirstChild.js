import React, {useEffect} from 'react';
import {connect} from 'react-redux'

const SomeFirstChild = ({bannersList, addBanner, search, setSearch}) => {

    useEffect(() => {
        console.log(search);
    }, [search]);

    return (
        <div className="App">
            <input type="text" value={search} onChange={event => {setSearch(event.target.value)}}/>
            <button>add track</button>
            <ul>
                {bannersList.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default connect(
    state => ({bannersList: state.bannersList, search: state.search}),
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
)(SomeFirstChild);

