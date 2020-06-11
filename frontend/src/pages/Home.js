import React from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'


const HomePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: pink;
  height: 100vh;
`

const Text = styled.p`
  color: black;
`

const ToShop = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 20px;
  text-decoration: none;
  color: black;
`



export const Home = () => {
  return (
    <>
      <Nav />
      <HomePage>
        <Text>home</Text>
        <ToShop to="/shop">Shop collection</ToShop>
        {/* <Background src="https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80" alt="background"></Background> */}
      </HomePage>
    </>
  )
}