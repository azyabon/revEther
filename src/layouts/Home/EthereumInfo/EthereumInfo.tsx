import * as S from "./EthereumInfo.styled";
import { FC, useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchEtheteumData } from "../../../store/ation-creators/ethereum";

export const EthereumInfo: FC = () => {
  const { ethereum, loading, error } = useTypedSelector(
    (state) => state.ethereum
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    //TODO: resolve trouble with dispatch types
    dispatch(fetchEtheteumData());
  }, []);

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  //TODO:resolve_trouble_with_render_elements
  return (
    <S.EthereumInfo>
      <h2>Ethereum info</h2>
      <S.EthereumData>
        <ul>
          <li>Price: ${Math.round(ethereum.quote.USD.price)}</li>
          <li>Market Cap: ${Math.round(ethereum.quote.USD.market_cap)}</li>
          <li>Volume(24h): ${Math.round(ethereum.quote.USD.volume_24h)}</li>
        </ul>
      </S.EthereumData>
      <S.EthereumGraph>Graphic coming soon...</S.EthereumGraph>
    </S.EthereumInfo>
  );
};
