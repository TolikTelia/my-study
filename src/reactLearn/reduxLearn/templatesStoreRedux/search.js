import {getChanger} from "./index";

const searchState = '';

const SET_SEARCH = 'SET_SEARCH';


const reducer = (state = searchState, action) => {
    switch (action.type){
        case SET_SEARCH:
            return  action.payload;
        default:
            return state
    }
};

export default reducer