import React from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav'
import { ReturnArrow } from '../lib/Return'


const HomePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const Checkout = () => {
  return (
    <>
      <Nav />
      <HomePage>
        <Link to="/shop">
          <ReturnArrow />
        </Link>
        <p>Checkout</p>
      </HomePage>
    </>
  )
}