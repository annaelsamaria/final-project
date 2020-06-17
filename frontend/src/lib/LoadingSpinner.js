import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  position: fixed;
  left: 50%;
  top: 35%;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #8CA4B3;
  border-right: 2px solid #8CA4B3;
  border-bottom: 2px solid #8CA4B3;
  border-left: 4px solid #8CA4B3;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`