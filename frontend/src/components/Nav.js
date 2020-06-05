import React from 'react'
import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom'
import { Link } from 'lib/Link'

const Navbar = styled.header`
  width: 100%;
  margin: 0 20px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    margin: 10px 50px;
  }
`

const Line = styled.div`
  width: 0px;
  height: 1px;
  background: black;

  @media (min-width: 667px) {
    width: 400px;
  }

  @media (min-width: 1024px) {
    width: 900px;
  }
`

const NavLink = styled(Link)`
  margin-left: 20px;
`

export const Nav = () => {
  return (
    <Navbar>
      <Link to="/">HK240</Link>
      <Line />
      <div>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signin">Sign in</NavLink>
      </div>
    </Navbar>
  )
}
