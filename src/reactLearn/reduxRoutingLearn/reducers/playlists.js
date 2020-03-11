const playlists =  [
    'Blessed and Possessed',
    'Preachers of the Night'
];

const ADD_PLAYLIST = 'ADD_PLAYLIST';
const DELETE_PLAYLIST = 'DELETE_PLAYLIST';

const reducer = (state = playlists, action) => {
    switch (action.type){
        case ADD_PLAYLIST:
            return [...state, action.payload];
        case DELETE_PLAYLIST:
            return state;
        default:
            return state
    }
};

export default reducer