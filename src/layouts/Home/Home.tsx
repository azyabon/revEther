import React from "react";
import * as S from "./Home.styled";
import { FirstScreen } from "./FirstScreen";
import { Connection } from "./Connection";

export const Home = () => {
  return (
    <S.HomeWrapper>
      <FirstScreen />
      <Connection />
    </S.HomeWrapper>
  );
};
