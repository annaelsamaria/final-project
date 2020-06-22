import React, { useState } from 'react'
import { Nav } from '../components/Nav'
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { SignUp } from '../components/SignUp'
import { SignIn } from 'components/SignIn';

const LoginSection = styled.section`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ToggleButtons = styled.button`
  font-family: 'Roboto', sans-serif;
  margin: 10px;
  border: none;
  font-size: 24px;
  background: transparent;
  outline: none;
  transition: all .25s ease-in-out;
  border-bottom: ${(props) => props.underline === true ? "1px solid black" : "none"};

  &:hover {
    border-bottom: 1px solid black;
  }
`


export const LogIn = () => {
  const [showLogin, setShowLogin] = useState(true)
  const accessToken = useSelector((store) => store.user.login.accessToken)

  const handleSignIn = () => {
    setShowLogin(true)
  }
  const handleSignUp = () => {
    setShowLogin(false)
  }

  return (
    <section>
      <Nav />
      <LoginSection>
        {!accessToken ?
          <div>
            <ToggleButtons
              underline={showLogin}
              type="button"
              onClick={handleSignIn}>
              Sign in
        </ToggleButtons>
            <ToggleButtons
              underline={!showLogin}
              type="button"
              onClick={handleSignUp}>
              Create user
         </ToggleButtons>
          </div>
          : ""
        }
        {showLogin === true ?
          <SignIn /> : <SignUp />
        }
      </LoginSection>
    </section>
  )
}

