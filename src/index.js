"use strict";

import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import SwapiDataReducer from "./redux/slice/swapiDataSlice.js";
import { saga } from "./redux/slice/swapiDataSlice.js";
import ClearReducer from "./redux/slice/clearSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import App from "./App.js";
import "./styles.css";

const rootElement = document.getElementById("main");
const root = ReactDom.createRoot(rootElement);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    swapiData: SwapiDataReducer,
    clear: ClearReducer,
  },
  preloadedState: {
    swapiData: "",
    clear: false,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(saga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
