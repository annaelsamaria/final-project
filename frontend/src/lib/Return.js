import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';


const BackToShop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Arrow = styled.svg`
  margin: 5px 0;
  
  &:hover {
    margin-left: 5px;
    transition: margin-left 0.2s cubic-bezier(0.42, 0, 0.21, 0.99);
  }
  &:active {
    margin-left: 5px;
    transition: margin-left 0.2s cubic-bezier(0.42, 0, 0.21, 0.99);
  }
`

const Text = styled.p`
  margin: 0 0 3px 5px;
  color: black;
  text-decoration: none;
`

const ToShop = styled(Link)`
  transition: margin-right 0.2s cubic-bezier(0.42, 0, 0.21, 0.99);

  &:hover {
    margin-right: 5px;
  }
`

export const ReturnArrow = () => {
  return (
    <BackToShop>
      <ToShop to="/shop">
        <Arrow width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 405.35" fillRule="evenodd" clipRule="evenodd"><path d="M504.51,245.66c-.33-.1-.67-.19-1-.26a10.81,10.81,0,0,0-2.15-.22H36.42l7-7L210.23,71.4A10.67,10.67,0,0,0,210,56.32a10.84,10.84,0,0,0-2.3-1.68h0c-.29-.16-.59-.3-.89-.43l-.06,0c-.28-.12-.57-.22-.86-.32l-.12,0q-.41-.12-.81-.21l-.21-.05-.72-.12-.31,0-.6,0-.43,0h-.46c-.2,0-.39,0-.58,0l-.28,0-.75.1h0a10.68,10.68,0,0,0-5.4,2.8l-192,192c-.26.26-.51.53-.74.81-.11.13-.2.27-.3.4a4.25,4.25,0,0,0-.31.43c-.13.18-.24.38-.35.57a3.14,3.14,0,0,0-.18.31c-.12.22-.23.45-.33.67l-.12.26c-.1.25-.19.51-.28.77,0,.07-.05.13-.07.2a8.1,8.1,0,0,0-.24.94s0,0,0,.06a10.67,10.67,0,0,0,2.9,9.69l192,192h0A10.66,10.66,0,0,0,211,441.17c-.09-.11-.19-.21-.28-.31l-.22-.26-.09-.09-.19-.21L36.42,266.52H501.34a10.67,10.67,0,0,0,3.17-20.86Z" transform="translate(0 -53.33)" /></Arrow>
      </ToShop>
      <Text>Shop</Text>
    </BackToShop>
  )
}
