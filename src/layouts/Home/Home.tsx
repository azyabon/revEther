import React from "react";
import * as S from "./Home.styled";
import { FirstScreen } from "./FirstScreen";
import { Connection } from "./Connection";
import { EthereumInfo } from "./EthereumInfo";

export const Home = () => {
  return (
    <S.HomeWrapper>
      <FirstScreen />
      <S.Container>
        <EthereumInfo />
        <Connection />
      </S.Container>
    </S.HomeWrapper>
  );
};
