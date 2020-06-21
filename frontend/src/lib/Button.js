import styled from 'styled-components'
import React from 'react'

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  margin: 20px;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 30px;
  outline: none;
  cursor: pointer;
  transition: all .25s ease-in-out; 

  &:hover {
    transform: scale(1.05); 
  }
`

const ScrollButton = styled.button`
  font-family: 'Roboto', sans-serif;
  margin: 20px;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 30px;
  outline: none;
  cursor: pointer;
  transition: all .25s ease-in-out; 

  &:hover {
    transform: scale(1.05); 
  }
`
export const ScrollTopButton = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <ScrollButton onClick={scrollTop}>Back to top</ScrollButton>
  )
}
