import React from 'react'
import styled from 'styled-components/macro';

const Contact = styled.footer`
  height: 200px; 
  background: #FFF8EE;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Footer = () => {
  return (
    <Contact>
      <p>Footer</p>
    </Contact>
  )
}