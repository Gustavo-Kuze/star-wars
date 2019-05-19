import { swapi } from '../../services/api'
import types from '../core/actions/types/charactersTypes'
import { put, call, takeLatest, all } from 'redux-saga/effects'

function* loadCharsSaga(action) {
    let jsonResponse = yield call(swapi, action.payload)
    yield put({ type: types.SET_CHARACTERS, payload: jsonResponse })
}

export default function* rootSaga() {
    yield all([
        takeLatest(types.LOAD_CHARACTERS_SAGA, loadCharsSaga)
    ])
}