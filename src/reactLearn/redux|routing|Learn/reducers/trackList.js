
const trackList = [

];

const ADD_TRACK = 'ADD_TRACK';
const DELETE_TRACK = 'DELETE_TRACK';
const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

const reducer = (state = trackList, action) => {
    switch (action.type){
        case ADD_TRACK:
            return [
                ...state,
                action.payload
            ];
        case DELETE_TRACK:
            return state;
        case FETCH_TRACKS_SUCCESS:
            return action.payload;
        default:
            return state
    }
};

export default reducer