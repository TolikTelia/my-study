
const bannersList = ['lol', 'kek', 'cheburek'];

const ADD_BANNER = 'ADD_BANNER';

const reducer = (state = bannersList, action) => {
    switch (action.type){
        case ADD_BANNER:
            return [
                ...state,
                action.payload
            ];
        default:
            return state
    }
};

export default reducer