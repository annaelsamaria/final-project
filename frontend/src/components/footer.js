import React from 'react'
import styled from 'styled-components/macro';

const Contact = styled.footer`
  padding: 50px;
  background: #f9f3ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Footer = () => {
  return (
    <Contact>
      <p>HK240 is a ceramic studio based in Halland. Every item is unique and made by hand.</p>
      <p>This webshop is a project made during Technigo bootcamp 2020. </p>
      <p>e-mail</p>
      <p>instagram</p>
      <p>Made by Anna Gustafsson 2020</p>
    </Contact>
  )
}