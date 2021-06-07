import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/style/index.scss";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./store/modules/index";

const createStoreWidthMiddleware = applyMiddleware(promiseMiddlerware, reduxThunk)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWidthMiddleware(
        rootReducer,
        //개발자 도구를 사용하기 위해 설정
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
