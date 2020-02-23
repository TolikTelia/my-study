import {combineReducers} from "redux";

import bannersList from './bannersList'
import search from './search'

export const getChanger = (state) => {
    return (nextObj) => (
        {
            ...state,
            nextObj
        }
    )
};

export default combineReducers({
    bannersList,
    search
})