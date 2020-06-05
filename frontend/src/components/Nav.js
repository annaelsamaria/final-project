import React from 'react'
import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom'

const Navbar = styled.header`
  height: 100px;
  padding: 0 20px;
  background: #8CA4B3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const MenuItem = styled(NavLink)`
  margin-left: 10px;
  text-decoration: none;
  color: black;
`

export const Nav = () => {
  return (
    <Navbar>
      <Link to="/"><img src="../assets/hk240s.png" alt="logo"></img></Link>
      <div>
        <MenuItem to="/shop">Shop</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/signin">Sign in</MenuItem>
      </div>
    </Navbar>
  )
}
