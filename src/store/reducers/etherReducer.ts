import {
  EthereumAction,
  EthereumActionTypes,
  IEthereum,
} from "../../types/ethereum";

const initialState: IEthereum = {
  ethereum: {},
  loading: false,
  error: null,
};

export const etherReducer = (
  state = initialState,
  action: EthereumAction
): IEthereum => {
  switch (action.type) {
    case EthereumActionTypes.FETCH_ETHEREUM_DATA:
      return { loading: true, error: null, ethereum: {} };
    case EthereumActionTypes.FETCH_ETHEREUM_DATA_SUCCESS:
      return { loading: false, error: null, ethereum: action.payload };
    case EthereumActionTypes.FETCH_ETHEREUM_DATA_ERROR:
      return { loading: false, error: action.payload, ethereum: {} };
    default:
      return state;
  }
};
