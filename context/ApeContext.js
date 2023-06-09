import React, { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { abi } from "./ApeCoinAbi";
import ledger from "./Ape.json";

const ledgerContractAddress = "0xd075D1647532925bc49f029956611746A9c25Ca0";

import Moralis from "moralis";

const ApeContext = createContext({});

export const ApeProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [inputFields, setInputFields] = useState({
    name: "",
    username: "",
  });
  const [winEvent, setWinEvent] = useState("");
  const [fullfill, setFullfill] = useState(false);

  const [loading, setLoading] = useState(false);
  const [nftid, setNftid] = useState("");
  const [apeStake, setApeStake] = useState("");
  const [apeBalance, setApeBalance] = useState("");
  const [apeNftBalance, setApeNftBalance] = useState("");
  const [apeNftTransfer, setApeNftTransfer] = useState([]);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setWalletAddress(accounts[0]);
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await checkIfWalletIsConnected();
    })();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWalletAddress(accounts[0]);
    return accounts[0];
  };

  const addToLedger = async (nft) => {
    const ledgerAbi = ledger.abi;
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        ledgerContractAddress,
        ledgerAbi,
        signer
      );

      const txRes = await contract.addToLedger(walletAddress, nft, {
        gasLimit: 5000000,
      });

      setLoading(true);
      await txRes.wait();
      setLoading(false);

      console.log(txRes);
    }
  };

  const getUserAuth = async () => {
    const ledgerAbi = ledger.abi;

    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      //   const signer = provider.getSigner();

      const apeCoinContract = new ethers.Contract(
        ledgerContractAddress,
        ledgerAbi,
        provider
      );

      const txRes = await apeCoinContract.isAuthenticated(walletAddress);

      setLoading(true);
      await txRes.wait();
      setLoading(false);

      console.log(txRes);

      return txRes;
    }
  };

  const getApeStake = async () => {
    const apeAbi = abi.apeAbi;
    const CONTRACT_ADDRESS = "0xeF37717B1807a253c6D140Aca0141404D23c26D4";

    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const apeCoinContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        apeAbi,
        signer
      );

      const txRes = await apeCoinContract.getAllStakes(walletAddress);

      // setLoading(true);
      // await txRes.wait();
      // setLoading(false);

      setApeStake(txRes);
      console.log("Ape Coin staked: ", txRes);

      return txRes;
    }
  };

  const getApeBalance = async () => {
    const apeAbi = abi.apeCoinAbi;
    const CONTRACT_ADDRESS = "0x328507DC29C95c170B56a1b3A758eB7a9E73455c";
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        apeAbi,
        provider /*signer*/
      );

      const txRes = await contract.balanceOf(walletAddress);

      // setLoading(true);
      // await txRes.wait();
      // setLoading(false);

      console.log(txRes);
      console.log("Ape Coin Balance: ", txRes);

      return txRes;
    }
  };

  const getApeNFTBalance = async () => {
    const apeAbi = abi.apeNftAbi;
    const CONTRACT_ADDRESS = "0xF40299b626ef6E197F5d9DE9315076CAB788B6Ef";
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        apeAbi,
        provider /*signer*/
      );

      const txRes = await contract.balanceOf(walletAddress);

      // setLoading(true);
      // await txRes.wait();
      // setLoading(false);

      console.log(txRes);
      console.log("Ape NFT Balance: ", txRes);

      return txRes;
    }
  };

  const getNftTransfersByWallet = async () => {
    try {
      await Moralis.start({
        apiKey:
          "ea7RIctgYCrticyh409mE0xSQi8nby1hsbLkL4zfopadb6ett7i6mPTDfAeHRSRD",
      });
      let response;
      response = await Moralis.EvmApi.nft.getWalletNFTTransfers({
        chain: "0x1",
        format: "decimal",
        direction: "both",
        address: walletAddress,
      });

      console.log(response.raw);
      // setApeNftTransfer(response.raw);

      // response = await Moralis.EvmApi.nft.getWalletNFTTransfers({
      //   chain: "0x1",
      //   format: "decimal",
      //   direction: "both",
      //   address: currentAccount,
      // });

      // console.log(response.raw);
      // setApeNftTransfer(response.raw);

      return response.raw;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ApeContext.Provider
      value={{
        getApeStake,
        getApeBalance,
        getApeNFTBalance,
        getNftTransfersByWallet,
        walletAddress,
        setWalletAddress,
        connectWallet,
        isModal,
        setIsModal,
        nftid,
        setNftid,
        currentPage,
        setCurrentPage,
        inputFields,
        setInputFields,
        winEvent,
        setWinEvent,
        addToLedger,
        getUserAuth,
        fullfill,
        setFullfill,
      }}
    >
      {children}
    </ApeContext.Provider>
  );
};

export default ApeContext;
