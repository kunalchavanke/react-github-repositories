import { takeLatest, call, put } from 'redux-saga/effects';
import { getRepos } from '../api';
import * as type from '../constants/action-types';

export function* getReposWatcher() {
    yield takeLatest(type.GET_REPOS, getReposWorker);
}

export function* getReposWorker() {
    try {
        const repos = yield call(getRepos);
        yield put({
            type: type.GET_REPOS_SUCCESS,
            payload: repos.data
        });
    } catch ({ message }) {
        yield put({
            type: type.GET_REPOS_FAILURE,
            payload: message
        });
    }
}

export default {
    getReposWatcher
};
