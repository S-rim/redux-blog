import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, SignUp } from "./containers";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Router>
    </>
  );
};

export default App;
