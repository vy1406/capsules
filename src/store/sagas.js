import { put, takeEvery } from 'redux-saga/effects';
import { setUserData } from "./actions";
import { GET_USER_DATA } from "./types";
import { setIsLoading, setIsError } from './actions';
import { DUMMY_USER_DATA } from '../utils/constants';

const countriesEndpoint = 'https://restcountries.com/v3.1/all'

function* fetchUserData() {
  yield put(setIsLoading(true))
  try {
    const isDev = true;
    let userData;
    if ( isDev ) {
        userData = DUMMY_USER_DATA
    } else {
        userData = yield fetch(`${countriesEndpoint}`).then(res => res.json());
    }
    yield put(setUserData(userData))
  }
  catch {
    yield put(setIsError(true))
  }
  finally {
    yield put(setIsLoading(false))
  }
}

function* userSaga() {
  yield takeEvery(GET_USER_DATA, fetchUserData);
  // yield takeEvery('ADD_USER_REQUESTED', addUser);
}

export default userSaga;
