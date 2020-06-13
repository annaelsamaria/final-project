import React, { useState } from 'react'
import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Cart } from 'pages/Cart'


const Navbar = styled.nav`
  height: 100px;
  padding: 0 20px;
  background: #8CA4B3;
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (min-width: 667px) {
    padding: 0 100px;
  }


  @media (min-width: 1024px) {
    padding: 0 200px;
  }
`
const MenuItem = styled(NavLink)`
  margin-left: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    opacity: 0.5;
  }
`

const ToggleCart = styled.button`
  margin-left: 10px;
  text-decoration: none;
  border: none;
  color: black;
  background: none;
  font-size: 16px;
  padding: 0;

&:hover {
  cursor: pointer;
  opacity: 0.5;
}
`

const Logo = styled.img`
  width: 100px;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 667px) {
    width: 200px;
  }
`


export const Nav = () => {
  const [open, setOpen] = useState(false)
  const totalItems = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)
  ))

  return (
    <>
      <Navbar>
        <Link to="/"><Logo src="../assets/hk240s.png" alt="logo"></Logo></Link>
        <div>
          <ToggleCart onClick={() => setOpen(!open)}>Cart({totalItems})</ToggleCart>
          <MenuItem to="/shop">Shop</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/login">Sign in</MenuItem>
        </div>
      </Navbar>
      <Cart open={open} />
    </>
  )
}