import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducers/user';
import styled from 'styled-components/macro';
import { Button } from '../lib/Button'
import { Profile } from '../pages/Profile';


const SignUpContainer = styled.div`
`

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SignUpLabel = styled.label`
  margin-bottom: 5px;
`

// const URL = 'http://localhost:8080/users';
const URL = 'https://hk240.herokuapp.com/users'

export const SignUp = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    return (dispatch) => {
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, address, postalCode, city, email, password }),
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
          setErrorMessage('You are already registered.', err);
          dispatch(user.actions.setErrorMessage({ errorMessage: err }));
        });
    };
  };

  if (!accessToken) {
    return (
      <SignUpContainer>
        {!showSummary && (
          <SignUpForm onSubmit={(e) => dispatch(handleSignup(e))}>
            <SignUpLabel>
              <p>First name</p>
              <input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </SignUpLabel>
            <SignUpLabel>
              <p>Last name</p>
              <input
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </SignUpLabel>
            <SignUpLabel>
              <p>Address</p>
              <input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
            </SignUpLabel><SignUpLabel>
              <p>Postal code</p>
              <input
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
                required
              />
            </SignUpLabel>
            <SignUpLabel>
              <p>City</p>
              <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
              />
            </SignUpLabel>
            <SignUpLabel>
              <p>E-mail</p>
              <input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </SignUpLabel>
            <SignUpLabel>
              <p>Password</p>
              <input
                type='password'
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </SignUpLabel>
            <Button type='submit'>Sign up</Button>
          </SignUpForm>
        )}
        {showSummary && <p>You are now signed up {firstName}</p>}
        {errorMessage && <h1>{errorMessage}</h1>}
      </SignUpContainer>
    );
  } else {
    return (
      <>
        <p>You are signed up</p>
        <Profile />
      </>
    )
  }
};