import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import creactSagaMiddleware from 'redux-saga';
import mySages from './sagas'
// import thunk from 'redux-thunk'

// redux-saga自己的配置
const sagaMiddleware = creactSagaMiddleware();

const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__?
window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE ({}): compose

// redux-thunk自己的配置
// const enhancer = composeEnhancers(applyMiddleware(thunk))

// redux-saga自己的配置
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// redux-thunk 和 redux-saga 共同配置
const store = createStore(reducer,enhancer)
sagaMiddleware.run(mySages)

export default store;