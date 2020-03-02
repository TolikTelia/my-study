
const trackList = [

]

const ADD_TRACK = 'ADD_TRACK';
const DELETE_TRACK = 'DELETE_TRACK';


const reducer = (state = trackList, action) => {
    switch (action.type){
        case ADD_TRACK:
            return [
                ...state,
                action.payload
            ];
        case DELETE_TRACK:
            return state;
        default:
            return state
    }
};

export default reducer