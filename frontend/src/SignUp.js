import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user, login } from './reducers/user';
import { Profile } from 'Profile.js';

//const URL = 'http://localhost:8080/users';
const URL = 'https://project-authorize.herokuapp.com/users';

export const SignUp = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const loggedoutMessage = useSelector(
    (store) => store.user.login.loggedoutMessage
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    return (dispatch) => {
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'content-Type': 'application/json' },
      })
        .then((res) => {
          if (res.ok) {
            setShowSummary(true);
            return res.json();
          } else {
            throw new Error('Unable to sign up');
          }
        })

        .then((json) => {
          dispatch(
            user.actions.setAccessToken({
              accessToken: json.accessToken,
            })
          );
          dispatch(user.actions.setUserId({ userId: json.userId }));
        })

        .catch((err) => {
          setErrorMessage('error:Username/email is already registered.', err);
          dispatch(user.actions.setErrorMessage({ errorMessage: err }));
        });
    };
  };

  if (!accessToken) {
    return (
      <div>
        {!showSummary && (
          <form onSubmit={(e) => dispatch(handleSignup(e))}>
            <label>
              username
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label>
              email
              <input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label>
              password
              <input
                type='password'
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button type='submit'>SIGN UP</button>
          </form>
        )}
        {showSummary && <p>You are now signed up {name}</p>}
        {errorMessage && <h1>{errorMessage}</h1>}
        {loggedoutMessage && <h4>you are now logged out!</h4>}
      </div>
    );
  } else {
    return <p>You are signed up</p>;
  }
};
