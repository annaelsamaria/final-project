import styled from 'styled-components'

export const Link = styled.a`
  font-size: 14px;
  line-height: 18px;
  color: black;

  &:hover {
    opacity: 0.5;
  }

@media (min-width: 1024px) {
  font-size: 16px;
  line-height: 22px;
}
`