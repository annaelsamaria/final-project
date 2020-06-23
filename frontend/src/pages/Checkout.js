import React from 'react'
import styled from 'styled-components/macro'
import { Nav } from '../components/Nav'
import { ReturnArrow } from '../lib/Return'
import { SecondTitle } from '../lib/Text'


const HomePage = styled.section`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`

const Cheers = styled.img`
  margin: 20px;
`


export const Checkout = () => {
  return (
    <>
      <Nav />
      <HomePage>
        <SecondTitle>Checkout</SecondTitle>
        <p>Checkout not yet available, but happy to see you here. Hope you like my project.</p>
        <Cheers src="../assets/checkout.gif" alt="Cheers"></Cheers>
        <ReturnArrow />
      </HomePage>
    </>
  )
}