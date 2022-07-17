import styled from "styled-components";

export const FirstScreen = styled.section`
  position: relative;
  background: url("./block-bgc.jpg") no-repeat center;
  height: 60vh;
  background-size: cover;
`;
export const Description = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32%;
  text-shadow: 2.5px 1px 0 #00dcff;
  text-align: center;
  h1 {
    text-align: center;
    font-size: 3rem;
  }
  div {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.2rem;
  }
`;
