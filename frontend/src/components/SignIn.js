import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import { Profile } from '../pages/Profile';
import styled from 'styled-components/macro';
import { Button } from '../lib/Button'


const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
          <SignInForm onSubmit={handleLogin}>
            <label>
              <p>E-mail</p>
              <input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type='password'
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <Button type='submit'>Log in</Button>
          </SignInForm>
        )}
        {errorMessage && <h1>{errorMessage}</h1>}
      </div>
    );
  } else {
    return <Profile />;
  }
};