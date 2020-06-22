import React from 'react'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { ui } from '../reducers/ui'


const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 100px;
  padding: 0 20px;
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

const MenuItem = styled(NavLink)`
  margin-left: 10px;
  text-decoration: none;
  color: black;
  transition: all .2s ease-in-out;
  color: #ecd6ba;

  &:hover {
    color: black;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BagButton = styled.button`
  font-family: 'Roboto', sans-serif;
  color: #ecd6ba;
  background: none;
  font-size: 16px;
  border: none;
  margin-left: 10px;
  padding: 0;
  outline: none;
  transition: all .2s ease-in-out; 

  &:hover {
    cursor: pointer;
    color: black;
  }
`


export const HomeNav = () => {
  const dispatch = useDispatch()
  const totalItems = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)))
  const accessToken = useSelector((store) => store.user.login.accessToken)

  return (
    <>
      <Navbar>
        <div></div>
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