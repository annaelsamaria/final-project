import styled from 'styled-components/macro';

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  color: black;

@media (min-width: 1024px) {
  font-size: 30px;
  line-height: 42px;
}
`

export const SecondTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  color: black;
  margin: 20px;

@media (min-width: 1024px) {
  font-size: 30px;
  line-height: 36px;
}
`

export const Subtitle = styled.h3`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  color: black;

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 36px;
  }
`

export const BodyText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  color: black;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 22px;
  }
`