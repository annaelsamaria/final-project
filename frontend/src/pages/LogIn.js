import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { SignUp } from '../components/SignUp'
import { SignIn } from 'components/SignIn';

//Toggla mellan sign in och sign up

export const LogIn = () => {


  return (
    <div>
      <Nav />
      <Link to="signin">
        <h3>Sign in</h3>
      </Link>
      <Link to="signup">
        <h3>Create account</h3>
      </Link>
      <SignIn />
      <SignUp />
    </div>
  )
}