import * as S from "./FirstScreen.styled";
import { FC } from "react";
import Button from "../../../components/Button/Button";

export const FirstScreen: FC = () => {
  return (
    <S.FirstScreen>
      <S.Description>
        <h1>RevEther</h1>
        <div>
          is an decentralized application in which you can connect your Metamask
          wallet and find information about your balance, address and
          transaction. And also you can monitor the state of Ethereum.
        </div>
        <Button style={{ marginTop: "2rem" }}>Connect wallet</Button>
      </S.Description>
    </S.FirstScreen>
  );
};
