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

  return (
    <S.EthereumInfo>
      <h2>Ethereum info</h2>
      <S.EthereumData>
        {ethereum.quote ? (
          <ul>
            <li>
              Price:
              <span>${Math.round(ethereum.quote.USD.price)}</span>
            </li>
            <li>
              Market Cap:
              <span>${Math.round(ethereum.quote.USD.market_cap)}</span>
            </li>
            <li>
              Volume(24h):
              <span>${Math.round(ethereum.quote.USD.volume_24h)}</span>
            </li>
          </ul>
        ) : (
          <div style={{ lineHeight: "2rem" }}>
            In order to see information about ethereum you need to install the
            extension:
            <a href="https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc">
              https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc
            </a>
            <br />
            (don't forget to turn it on)
          </div>
        )}
      </S.EthereumData>
      {/*<S.EthereumGraph>Graphic coming soon...</S.EthereumGraph>*/}
    </S.EthereumInfo>
  );
};
