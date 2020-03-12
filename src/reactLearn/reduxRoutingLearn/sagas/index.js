import {takeEvery, call, put} from'redux-saga/effects'
import {putTracks, mockData} from "../actions/tracks";

const fetchData = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(mockData)
        }, 2000)
    }))
};

function * workerLoadTracks () {
    const data = yield call(fetchData);

    yield put(putTracks(data));
}

export function * watchLoadTracks () {
    yield takeEvery('LOAD_TRACKS', workerLoadTracks)
}