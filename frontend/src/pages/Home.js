import React from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom'

const HomePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: pink;
  height: 100vh;
`

// const Background = styled.img`
//   width: 100%;
// `

const Text = styled.p`
  color: black;
`

export const Home = () => {
  return (
    <HomePage>
      <Text>home</Text>
      <Link to="/shop">Shop collection</Link>
      {/* <Background src="https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80" alt="background"></Background> */}
    </HomePage>
  )
}