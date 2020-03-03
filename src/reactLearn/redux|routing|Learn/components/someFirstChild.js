import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux'

import {getTracks} from '../actions/tracks'

const SomeFirstChild = ({trackList, addTrack, findTrack, getTracks}) => {

    const trackInput = useRef(null);
    const searchInput = useRef(null);


    useEffect(() => {
        // console.log(search);
    }, []);

    const addTrackHandle = () => {
        addTrack(trackInput.current.value);
        trackInput.current.value = ''
    };
    const findTrackHandle = () => {
        findTrack(searchInput.current.value)
    };

    return (
        <div className="App">
            <div>
                <input type="text" ref={trackInput}/>
                <button onClick={addTrackHandle}>add track</button>
            </div>
            <div>
                <input type="text" ref={searchInput}/>
                <button onClick={findTrackHandle}>find track</button>
            </div>
            <div>
                <button onClick={getTracks}>get tracks</button>
            </div>
            <ul>
                {trackList.map(item => (
                    <li key={item}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default connect(
    state => ({
        trackList: state.trackList.filter(track => track.name.includes(state.filterTracks)),
    }),
    dispatch => ({
        addTrack(trackName) {
            const payload = {
                id: Date.now().toString(),
                name: trackName
            };
            dispatch({type:'ADD_TRACK', payload: payload});
        },
        findTrack: (name) => {
            dispatch({type: 'FIND_TRACK', payload: name})
        },
        getTracks: () => {
            dispatch(getTracks())
        }
    })
)(SomeFirstChild);

