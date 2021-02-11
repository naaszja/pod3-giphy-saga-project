import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


///////////// SAGA Setup /////////////////
function* fetchFavorites() {
  try {
    let response = yield axios.get('/api/favorite');
    yield put({ type: 'SET_FAVORITES', payload: response.data });
  } catch (error) {
    console.log(`Error fetching favorites`, error);
  }
}

function* addFavorite() {
  try {
    yield axios.post('api/favorite', action.payload);
    yield put({ type: 'FETCH_FAVORITES' })
  } catch {

  }
}

 export function* rootSaga() {
  yield takeEvery('FETCH_FAVORITES', fetchFavorites);
  yield takeEvery('ADD_FAVORITE', addFavorite);
}

// Instantiate middleware
const sagaMiddleware = createSagaMiddleware();

// favoritiesReducer
const favoritesReducer = (state = [], action) => {
  console.log(action, state);
  if (action.type === 'SET_FAVORITES') {
    return action.payload;
  } else if (action.type === 'CLEAR_FAVORITES') {
    return []
  }
  return state;
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
     favoritesReducer,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));
