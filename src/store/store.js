import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { countryReducer } from '../routes/countries/store/reducers'
import { globalReducer } from './reducers'
import rootSaga from '.';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        countryReducer,
        globalReducer
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store; 