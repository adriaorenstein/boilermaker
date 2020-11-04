import React from "react";
import ReactDOM from "react-dom";
import store from "./client/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Robots from "./client/Robots";

ReactDOM.render(
  <Provider store={store}>
    {<div>Hello, world!</div>}
    <Router>
      <Route exact path="/robots" component={Robots} />
    </Router>
  </Provider>,
  document.getElementById("app")
  //make sure 'app' in document.getElementById is the same as the id of the div in index.html
);
