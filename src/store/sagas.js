import { put, call, takeEvery, select } from 'redux-saga/effects';
import { setUserData, setUsers, setTeams, setUserRoasters, setTeamRoasters } from "./actions";
import { setIsLoading, setIsError, setLoggedUser } from './actions';
import { DUMMY_USER_DATA } from '../utils/constants';
import { setLocalStorageItem } from '../services/localStorage';
import {
  postLogin,
  getTeams,
  getUsers,
  getUserRoasters,
  getTeamRoasters,
  postUser,
  postTeam,
  postRoasters
} from '../services/apiService';
import {
  GET_USER_DATA,
  AUTHENTICATE,
  ADD_NEW_USER,
  ADD_NEW_TEAM,
  GET_USERS,
  GET_TEAMS,
  ADD_DATES,
  SET_USER_DATA
} from "./types";

const countriesEndpoint = 'https://restcountries.com/v3.1/all'

export const getUser = (state) => state.globalReducer.userData.user

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
    const userRoasters = yield call(getUserRoasters);
    const teamRoasters = yield call(getTeamRoasters);
    yield put(setUserRoasters(userRoasters))
    yield put(setTeamRoasters(teamRoasters))
  }
  catch {
    yield put(setIsError(true))
  }
  finally {
    yield put(setIsLoading(false))
  }
}

function* fetchTeams() {
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

function* addDates(action) {
  try {
    const isOk = yield call(postRoasters, action.payload);
    console.log("isOk" , isOk)
  }
  catch (e){
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
  yield takeEvery(ADD_DATES, addDates);
  
  
  
  // yield takeEvery('ADD_USER_REQUESTED', addUser);
}

export default userSaga;
