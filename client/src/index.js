import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskList from './todo/TaskList';
import store from "./components/reduxCount/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
      <App />
      <TaskList />
  </Provider>,
document.getElementById("root")
);

reportWebVitals();
