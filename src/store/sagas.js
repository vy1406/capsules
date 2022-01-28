import { put, call, takeEvery } from 'redux-saga/effects';
import { setUserData, setUsers, setTeams } from "./actions";
import { setIsLoading, setIsError, setLoggedUser } from './actions';
import { DUMMY_USER_DATA } from '../utils/constants';
import { setLocalStorageItem } from '../services/localStorage';
import {
  postLogin,
  getTeams,
  getUsers,
  getUserData,
  postUser,
  postTeam
} from '../services/apiService';
import {
  GET_USER_DATA,
  AUTHENTICATE,
  ADD_NEW_USER,
  ADD_NEW_TEAM,
  GET_USERS,
  GET_TEAMS
} from "./types";

const countriesEndpoint = 'https://restcountries.com/v3.1/all'

function* authenticateUser(action) {
  yield put(setIsLoading(true))
  try{
    const res = yield call(postLogin, action.payload);
    setLocalStorageItem('token', res.token)
    yield put(setLoggedUser(res.logged_user))
  }

  catch (error) {
    yield put(setIsError(true))
  }
  finally {
    yield put(setIsLoading(false))
  }
}

function* addTeam(action) {
  console.log(action)
  try {
    const res = yield call(postTeam, action.payload);
    console.log(res)
  }
  catch {
    yield put(setIsError(true))
  }
  finally {
    yield put(setIsLoading(false))
  }
}

function* addUser(action) {
  try {
    const res = yield call(postUser, action.payload);
  }
  catch {
    yield put(setIsError(true))
  }
  finally {
    yield put(setIsLoading(false))
  }
}

function* fetchUserData() {
  yield put(setIsLoading(true))
  try {
    const isDev = false;
    let userData;
    if ( isDev ) {
        userData = DUMMY_USER_DATA        
    } else {
        userData = yield call(getUserData);
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

function* fetchTeams() {
  console.log('LOADING!')
  yield put(setIsLoading(true))
  try {
    const teams = yield call(getTeams);
    console.log(teams)
    yield put(setTeams(teams))
  }
  catch (e){
    console.log(e)
    yield put(setIsError(true))
  }
  finally {
    yield put(setIsLoading(false))
  }
}

function* fetchUsers() {
  yield put(setIsLoading(true))
  try {
    const users = yield call(getUsers);
    yield put(setUsers(users))
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
  yield takeEvery(AUTHENTICATE, authenticateUser);
  yield takeEvery(ADD_NEW_USER, addUser);
  yield takeEvery(ADD_NEW_TEAM, addTeam);
  yield takeEvery(GET_TEAMS, fetchTeams);
  yield takeEvery(GET_USERS, fetchUsers);
  
  
  
  // yield takeEvery('ADD_USER_REQUESTED', addUser);
}

export default userSaga;
