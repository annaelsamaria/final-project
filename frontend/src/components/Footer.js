import React from 'react'
import styled from 'styled-components/macro'
import { SecondTitle } from '../lib/Text'


const Contact = styled.footer`
  padding: 20px 20px 50px 20px;
  background: #f9f3ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Email = styled.a`
  text-decoration: none;
  color: black;
  border-bottom: 1px solid black;
  margin: 10px;
`

export const Footer = () => {
  return (
    <Contact>
      <SecondTitle>Contact</SecondTitle>
      <Email href="mailto:hej@annagustafsson.se?subject=Nice webshop!" target="_blank" rel="noopener noreferrer">Send e-mail</Email>

      <p>HK240 is a ceramic studio based in Halland. Every item is unique and made by hand.</p>
      <p>© Anna Gustafsson – Technigo Bootcamp 2020</p>
    </Contact>
  )
}
