// const FETCH_ETHEREUM_DATA = "FETCH_ETHEREUM_DATA";
// const FETCH_ETHEREUM_DATA_SUCCESS = "FETCH_ETHEREUM_DATA_SUCCESS";
// const FETCH_ETHEREUM_DATA_ERROR = "FETCH_ETHEREUM_DATA_ERROR";

export interface IEthereum {
  ethereum: any;
  loading: boolean;
  error: null | string;
}
export enum EthereumActionTypes {
  FETCH_ETHEREUM_DATA = "FETCH_ETHEREUM_DATA",
  FETCH_ETHEREUM_DATA_SUCCESS = "FETCH_ETHEREUM_DATA_SUCCESS",
  FETCH_ETHEREUM_DATA_ERROR = "FETCH_ETHEREUM_DATA_ERROR",
}
interface FetchEthereumAction {
  type: EthereumActionTypes.FETCH_ETHEREUM_DATA;
}
interface FetchEthereumSuccessAction {
  type: EthereumActionTypes.FETCH_ETHEREUM_DATA_SUCCESS;
  payload: {};
}
interface FetchEthereumErrorAction {
  type: EthereumActionTypes.FETCH_ETHEREUM_DATA_ERROR;
  payload: string;
}

export type EthereumAction =
  | FetchEthereumAction
  | FetchEthereumSuccessAction
  | FetchEthereumErrorAction;
