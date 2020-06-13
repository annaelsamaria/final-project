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

const Logo = styled.img`
  width: 300px;

  @media (min-width: 667px) {
    width: 400px;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
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
  margin: 20px;

  &:hover {
    opacity: 0.5;
  }
`


export const Home = () => {
  return (
    <>
      <Nav />
      <HomePage>
        <Logo src="../assets/hk240logo.png" alt="logo"></Logo>
        <ToShop to="/shop">Shop collection</ToShop>
        {/* <Background src="https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80" alt="background"></Background> */}
      </HomePage>
    </>
  )
}