import * as S from "./FirstScreen.styled";
import { FC } from "react";

export const FirstScreen: FC = () => {
  return (
    <S.FirstScreen>
      <S.Description>
        <h1>RevEther</h1>
        <div>
          is an decentralized application in which you can connect your Metamask
          wallet and find out all the necessary information. And also you can
          monitor the state of Ethereum.
        </div>
      </S.Description>
    </S.FirstScreen>
  );
};
