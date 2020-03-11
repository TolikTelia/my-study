const mockData = [
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

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('got tracks');
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockData })
    }, 2000)
};