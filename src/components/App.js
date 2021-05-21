import React from "react";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm";
import NewPost from "../pages/NewPost";
import "../assets/css/App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import BasicRoutes from "./BasicRoutes";
import { connect } from "react-redux";
import PostDetail from "../pages/PostDetail";

function App({ checked }) {
  return (
    <Router>
      {checked && (
        <Switch>
          <BasicRoutes path="/login">
            <LoginForm />
          </BasicRoutes>
          <AuthRoutes path="/newpost">
            <NewPost />
          </AuthRoutes>
          <AuthRoutes path="/:id">
            <PostDetail />
          </AuthRoutes>
          <AuthRoutes path="/">
            <Home />
          </AuthRoutes>
        </Switch>
      )}
    </Router>
  );
}

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
