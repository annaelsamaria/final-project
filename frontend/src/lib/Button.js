import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  margin: 20px;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 30px;
  outline: none;
  transition: all .25s ease-in-out; 

  &:hover {
    transform: scale(1.05); 
  }
`
