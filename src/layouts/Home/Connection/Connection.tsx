import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3 from "web3";
import * as S from "./Connection.styled";
import Button from "../../../components/Button/Button";

export const Connection = () => {
  const [userAccount, setUserAccount] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<string>("0");
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getTransactionFromLatestBlock = async () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/b2d6134db76c47b591d49ab7c66733d5"
      )
    );
    const block = await web3.eth.getBlock("latest", true);
    setTransactions(
      block.transactions.map((transaction) => {
        transaction.value = web3.utils.fromWei(transaction.value);
        return transaction;
      })
    );
    setBlockNumber(block.number);
    console.log(block.transactions);
  };

  const onConnect = () => {
    if (window.ethereum) {
      //if metamask install in user browser
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account: Array<string>) => {
          setUserAccount(account[0]);
          getBalance(account[0]);
        });
      window.ethereum.on("accountsChanged", onConnect);
      window.ethereum.on("chainChanged", chainChangedHandler);
    } else {
      setErrorMessage("Install metamask in your browser");
    }
  };

  const getBalance = (account: string) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance: string) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  return (
    <>
      {userAccount ? (
        <S.Connected>
          <h2>You were connected</h2>
          <div>YOUR ADDRESS: {userAccount} </div>
          <div>
            YOUR BALANCE:{" "}
            <img
              src="./eth.png"
              alt="eth"
              width={20}
              height={20}
              style={{ marginRight: "0.5rem" }}
            />
            {userBalance}
          </div>
          <Button
            style={{ marginTop: "2rem" }}
            onClick={getTransactionFromLatestBlock}
          >
            Get information about transactions from latest block
          </Button>
          <S.Transactions>
            {transactions.length === 0
              ? "no transactions"
              : transactions.map<any>((transaction) => {
                  return (
                    <S.Transaction key={transaction.transactionId}>
                      <h2>Block number: {transaction.blockNumber}</h2>
                      <span>from: {transaction.from}</span>
                      <span>to: {transaction.to}</span>
                      <span>gas: {transaction.gas}</span>
                      <span>value: {transaction.value}</span>
                    </S.Transaction>
                  );
                })}
          </S.Transactions>
        </S.Connected>
      ) : (
        <S.Connection>
          <S.Description>
            Click the button to connect your wallet to the site. After that,
            information about your wallet will be displayed on the screen:
          </S.Description>
          <Button onClick={() => onConnect()}>
            CONNECT YOUR METAMASK WALLET
          </Button>
          <S.Error style={{ marginTop: "1rem" }}>{errorMessage}</S.Error>
        </S.Connection>
      )}
    </>
  );
};
