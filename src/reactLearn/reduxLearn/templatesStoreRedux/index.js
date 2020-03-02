import {combineReducers} from "redux";

import trackList from './trackList'
import playlists from './playlists'
import filterTracks from './filterTracks'

export const getChanger = (state) => {
    return (nextObj) => (
        {
            ...state,
            nextObj
        }
    )
};

export default combineReducers({
    trackList,
    playlists,
    filterTracks
})