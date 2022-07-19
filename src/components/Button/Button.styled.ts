import styled from "@emotion/styled";

export const Button = styled.button`
  font-family: "Press Start 2P", sans-serif;
  outline: none;
  border: none;
  background-color: #00dcff;
  padding: 1rem 2rem;
  border-radius: 16px;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-shadow: 2.5px 1px 0 #000;
  &:hover {
    box-shadow: 0 4px 30px #00dcff;
  }
`;
