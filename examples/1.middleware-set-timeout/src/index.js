import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { timerMiddleware } from './middleware'
import reducer from './reducer'
import Timer from './components/Timer';


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(timerMiddleware)),
)

ReactDOM.render(
  <Provider store={store}>
    <Timer />
  </Provider>,
  document.getElementById('root')
);
