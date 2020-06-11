import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user, login } from '../reducers/user';
import { Profile } from '../pages/Profile';

// const URL = 'http://localhost:8080/users';

export const SignIn = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const loggedoutMessage = useSelector(
    (store) => store.user.login.loggedoutMessage
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  if (!accessToken) {
    return (
      <div>
        {!showSummary && (
          <form onSubmit={handleLogin}>
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

            <button type='submit'>LOG IN</button>
          </form>
        )}
        {errorMessage && <h1>{errorMessage}</h1>}
      </div>
    );
  } else {
    return <Profile />;
  }
};