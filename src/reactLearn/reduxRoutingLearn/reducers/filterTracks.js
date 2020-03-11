import {getChanger} from "./index";

const initialState = '';

const FIND_TRACK = 'FIND_TRACK';

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FIND_TRACK:
            return  action.payload;
        default:
            return state
    }
};

export default reducer