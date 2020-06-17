import React, { useState } from 'react'
import { Nav } from '../components/Nav'
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { SignUp } from '../components/SignUp'
import { SignIn } from 'components/SignIn';

//Toggla mellan sign in och sign up

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
      {!accessToken ?
        <>
          <button
            type="button"
            onClick={handleSignIn}>
            Sign in
        </button>
          <button
            type="button"
            onClick={handleSignUp}>
            Create user
         </button>
        </>
        : ""
      }
      {showLogin === true ?
        <SignIn /> : <SignUp />
      }
    </section>
  )
}

