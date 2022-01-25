import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";

import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";

import "./styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Switch>
        <Route exact path="/signIn/login" component={SignIn} />
        <Route exact path="/signIn/registration" component={SignUp} />
      </Switch>
      <>
        <ToastContainer />
      </>
    </div>
  );
};

export default SignInAndSignUpPage;
