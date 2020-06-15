import React, { useState } from 'react'
import { Nav } from '../components/Nav'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { SignUp } from '../components/SignUp'
import { SignIn } from 'components/SignIn';

//Toggla mellan sign in och sign up

export const LogIn = () => {
  const [showLogin, setShowLogin] = useState(true)

  const handleSignIn = () => {
    setShowLogin(true)
  }

  const handleSignUp = () => {
    setShowLogin(false)
  }

  return (
    <section>
      <Nav />
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
      {showLogin === true ?
        <SignIn /> : <SignUp />
      }
    </section>
  )



  // if (showLogin === true) {
  //   return (
  //     <div>
  //       <SignIn />
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <SignUp />
  //     </div>
  //   )
  // }
}



//   //onClick?

//   return (
//     <div>
//       <Nav />
//       <Link to="signin">
//         <h3>Sign in</h3>
//       </Link>
//       <Link to="signup">
//         <h3>Create account</h3>
//       </Link>
//       <SignIn />
//       <SignUp />
//     </div>
//   )
// }