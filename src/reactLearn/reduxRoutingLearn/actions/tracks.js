export const mockData = [
    {
        id: 1,
        name: 'some'
    },
    {
        id: 1,
        name: 'tolik'
    },
    {
        id: 1,
        name: 'is'
    },
    {
        id: 1,
        name: 'learning'
    },
    {
        id: 1,
        name: 'redux'
    }
];
// thunk learn
export const getTracks = () => (dispatch, getState) => {
    setTimeout(() => {
        console.log('got tracks');
        console.log(getState());
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockData })
    }, 2000)
};

// saga learn
export const putTracks = (data) => {
    return {
        type: 'PUT_TRACKS',
        payload: data
    };
};

export const loadTracks = () => {
    return {
      type: 'LOAD_TRACKS'
    };
};