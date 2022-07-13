import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3 from "web3";

export const Connection = () => {
  let web3: any;
  const [userAccount, setUserAccount] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    web3 = new Web3(
      Web3.givenProvider ||
        "https://mainnet.infura.io/v3/f59b7c7975ac426096964b62b486bcf3"
    );
  }, []);

  const getBlock = async () => {
    const block = await web3.eth.getBlock("latest");
    const number = block.number;

    if (block !== null && block.transactions !== null) {
      for (let txHash of block.transactions) {
        let tx = await web3.eth.getTransaction(txHash);
        console.log(tx);
        if (userAccount === tx.to) {
          console.log("Transaction found on block: " + number);
          console.log({
            from: tx.from,
            to: tx.to,
            value: web3.utils.fromWei(tx.value, "ether"),
          });
        }
      }
    }
  };

  const onConnect = () => {
    if (window.ethereum) {
      //if metamask install in user browser
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account: Array<string>) => {
          setUserAccount(account[0]);
          getBalance(account[0]);
          getBlock();
        });
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

  window.ethereum.on("accountsChanged", onConnect);

  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <>
      {userAccount ? (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            margin: "auto",
          }}
        >
          <div>You were connected</div>
          <div>YOUR ADDRESS: {userAccount}</div>
          <div>YOUR BALANCE: {userBalance}</div>
        </section>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            margin: "auto",
          }}
        >
          <button onClick={() => onConnect()}>
            CONNECT YOUR METAMASK WALLET
          </button>
          <span>{errorMessage}</span>
        </div>
      )}
    </>
  );
};
