import { EthereumAction, EthereumActionTypes } from "../../types/ethereum";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchEtheteumData = () => {
  return async (dispatch: Dispatch<EthereumAction>) => {
    try {
      dispatch({ type: EthereumActionTypes.FETCH_ETHEREUM_DATA });
      //TODO: resolve trouble with CORS
      await axios
        .get(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
          {
            headers: {
              // @ts-ignore
              //TODO: resolve trouble with headers option types
              "X-CMC_PRO_API_KEY": process.env.REACT_APP_COINMARKET_KEY,
            },
          }
        )
        .then((response) => {
          dispatch({
            type: EthereumActionTypes.FETCH_ETHEREUM_DATA_SUCCESS,
            payload: response.data.data[1],
          });
        });
    } catch (error) {
      dispatch({
        type: EthereumActionTypes.FETCH_ETHEREUM_DATA_ERROR,
        payload: "Error",
      });
    }
  };
};
