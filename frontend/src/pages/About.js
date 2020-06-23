import React from 'react'
import { Nav } from '../components/Nav'
import styled from 'styled-components/macro'
import { BodyText } from '../lib/Text'

const AboutSection = styled.section`
  margin: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 667px) {
    margin: 50px 100px;

  }

  @media (min-width: 1024px) {
    margin: 50px 200px;
  }
`

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`

export const About = () => {
  return (
    <>
      <Nav />
      <AboutSection>
        <ProfileImg src="../assets/anna_2.jpg" alt="Anna"></ProfileImg>
        <h3>Hello <span role="img" aria-label="wave emoji">👋🏼</span></h3>
        <BodyText>HK240 is run by me, Anna Gustafsson from our home outside of Kungsbacka.
        It's a side project that I really enjoy and I always find inspiration when I'm in the studio.
        My latest collection is inspired by nature and I wanted that hand made feeling to shine through. Hope you enjoy it.
      </BodyText>
        <BodyText>Feel free to contact me if you have any questions.</BodyText>
      </AboutSection>
    </>
  )
}