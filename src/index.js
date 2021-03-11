import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./scss/style.css";
import App from "./components/App";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./_reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./_saga";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
