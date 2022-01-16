import { put, takeEvery } from 'redux-saga/effects';
import { setCountries } from "./actions";
import { GET_COUNTRIES } from "./types";
import { setIsLoading, setIsError } from '../../../store/actions';

const countriesEndpoint = 'https://restcountries.com/v3.1/all'

function* fetchCountries() {
  yield put(setIsLoading(true))
  try { 
    const countries = yield fetch(`${countriesEndpoint}`).then(res => res.json());
    yield put(setCountries(countries))
  }
  catch {
    yield put(setIsError(true))
  }
  finally {
    yield put(setIsLoading(false))
  }
}

function* countrySaga() {
  yield takeEvery(GET_COUNTRIES, fetchCountries);
  // yield takeEvery('ADD_USER_REQUESTED', addUser);
}

export default countrySaga;
