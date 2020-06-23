import React from 'react'
import styled from 'styled-components/macro'
import { Nav } from '../components/Nav'
import { ReturnArrow } from '../lib/Return'


const HomePage = styled.section`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`

export const Checkout = () => {
  return (
    <>
      <Nav />
      <HomePage>
        <ReturnArrow />
        <img src="../assets/checkout.gif" alt="Leo"></img>
      </HomePage>
    </>
  )
}