import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/header";
import Homepage from "./pages/homepage";
import EndGamePage from "./pages/endGamePage";
import SignInAndSignUpPage from "./pages/signInAndSignUp";
import { selectCurrentUser } from "./redux/user/selectors";
import ProfilePage from "./pages/userProfile";

import "./App.css";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/endGame" component={EndGamePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route
          path="/signIn"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
