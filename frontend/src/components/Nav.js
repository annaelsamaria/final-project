import React from 'react'
import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { ui } from '../reducers/ui'


const Navbar = styled.nav`
  height: 100px;
  padding: 0 20px;
  background: #8CA4B3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 667px) {
    padding: 0 100px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    padding: 0 200px;
  }
`
const Logo = styled.img`
  width: 100px;
  margin-bottom: 10px;
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;

  @media (min-width: 667px) {
    margin-bottom: 0px;
    width: 200px;
  }
`

const MenuItem = styled(NavLink)`
  margin-left: 10px;
  text-decoration: none;
  color: black;
  transition: all .2s ease-in-out; 

  &:hover {
    color: #ecd6ba;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BagButton = styled.button`
  font-family: 'Roboto', sans-serif;
  background: none;
  font-size: 16px;
  border: none;
  margin-left: 10px;
  padding: 0;
  outline: none;
  transition: all .2s ease-in-out; 

  &:hover {
    cursor: pointer;
    color: #ecd6ba;
  }
`


export const Nav = () => {
  const dispatch = useDispatch()
  const totalItems = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)))
  const accessToken = useSelector((store) => store.user.login.accessToken)

  return (
    <>
      <Navbar>
        <Link to="/"><Logo src="/assets/hk240s.png" alt="logo"></Logo></Link>
        <Menu>
          <MenuItem to="/shop">Shop</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/login">{!accessToken ? "Sign in" : "My page"}</MenuItem>
          <BagButton onClick={() => dispatch(ui.actions.openCart())}>Cart({totalItems})</BagButton>
        </Menu>
      </Navbar>
    </>
  )
}