import { all } from 'redux-saga/effects';
import countrySaga from '../routes/countries/store/sagas';

export default function* rootSaga() {
  yield all([
    countrySaga(),
    // msgSaga(),
  ])
}