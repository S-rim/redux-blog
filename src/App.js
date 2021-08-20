import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, SignUp, AddPost, MainPost, UpdatePost, DetailPost } from "./containers";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/add-post" component={AddPost} />
        <Route exact path="/post/:id" component={DetailPost} />
        <Route exact path="/post" component={MainPost} />
        <Route exact path="/edit/:id" component={UpdatePost} />
      </Router>
    </>
  );
};

export default App;
