
const bannersList = [
    'Raise your fist Evangelist',
    'Killers with the Cross',
    'Midnight Messiah'
];

const ADD_TRACK = 'ADD_TRACK';

const reducer = (state = bannersList, action) => {
    switch (action.type){
        case ADD_TRACK:
            return [
                ...state,
                action.payload
            ];
        default:
            return state
    }
};

export default reducer