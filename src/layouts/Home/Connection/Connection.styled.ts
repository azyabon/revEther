import styled from "@emotion/styled";

export const Connection = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Connected = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  h2 {
  }
  div {
    display: flex;
    align-items: center;
    margin: 1rem;
  }
`;
export const Description = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 3rem;
`;
export const Error = styled.div`
  text-shadow: 2.5px 1px 0 #ff0000;
`;
export const Transactions = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0 0 0 !important;
  justify-content: space-between;
`;
export const Transaction = styled.div`
  background: url("/cube.png") no-repeat right center;
  background-size: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  flex-wrap: wrap;
  max-width: 100%;
  flex: 0 1 100%;
  padding: 1rem;
  box-shadow: 0 0 15px #00dcff;
  border-radius: 12px;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 4px 30px #fff;
    text-shadow: 2.5px 1px 0 #00dcff;
  }
  h2 {
    font-size: 1.5rem;
    max-width: 100%;
  }
  span {
    margin: 1rem;
    font-size: 1rem;
    width: 100%;
    max-width: 100%;
  }
`;
