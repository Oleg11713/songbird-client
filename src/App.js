import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Homepage from './pages/homepage';
import EndGamePage from './pages/endGamePage';
import SignInAndSignUpPage from './pages/signInAndSignUp';
import ProfilePage from './pages/userProfile';
import Header from './components/header';
import { selectCurrentUser } from './redux/user/selectors';
import { setCurrentUser } from './redux/user/actions';
import { authCheck } from './http/userAPI';

import './App.css';

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authCheck()
      .then(data => {
        dispatch(setCurrentUser(data));
      })
      .catch(e => {
        toast.warning(
          `${e.response.data.message}. Чтобы играть необходимо авторизоваться`,
          {
            className: 'toast-error',
            position: toast.POSITION.BOTTOM_CENTER,
          },
        );
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Spinner animation="grow" />;
  }

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
}

export default App;
