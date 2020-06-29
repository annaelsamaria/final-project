import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { HomeNav } from '../components/HomeNav'

const HomePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(/assets/mediaio_hkmovie.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center; 

  @media (min-width: 667px) {
    background-image: none;
  }
`

const Logo = styled.img`
  position: relative;
  margin-top: 50px;
  width: 300px;

  @media (min-width: 667px) {
    width: 400px;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
`

const ToShop = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  padding: 0 20px;
  background: #ecd6ba;
  text-decoration: none;
  color: black;
  margin: 20px;
  transition: all .2s ease-in-out; 

  &:hover {
    background: transparent;
  }
`

export const Video = styled.video`
  position: absolute;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: none;

  @media (min-width: 667px) {
    display: block;
  }
`


export const Home = () => {
  return (
    <>
      <HomeNav />
      <HomePage>
        <Video autoPlay playsInline muted loop>
          <source src="../assets/media_hkmovie.mp4" type="video/mp4"></source>
        "Your browser is not supported!"
      </Video>
        <Logo src="../assets/hk240logo.png" alt="logo"></Logo>
        <ToShop to="/shop">Shop collection</ToShop>
      </HomePage>
    </>
  )
}