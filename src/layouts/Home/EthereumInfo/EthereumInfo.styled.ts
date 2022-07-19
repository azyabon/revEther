import styled from "styled-components";

export const EthereumInfo = styled.section`
  padding: 2rem;
  box-shadow: 0 6px 10px 0 #00dcff;
  border-radius: 0 0 70px 70px;
  transition: all 0.5s ease;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  &:hover {
    box-shadow: 0 6px 10px 0 #fff;
  }
`;
export const EthereumData = styled.div`
  margin-bottom: 2rem;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    li {
      display: flex;
      flex: 0 1 33%;
      flex-direction: column;
      align-items: center;
      list-style: none;
      span {
        margin-top: 1rem;
      }
    }
  }
`;
export const EthereumGraph = styled.div`
  text-align: center;
`;
