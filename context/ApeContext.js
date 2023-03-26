import React, { useState, useEffect, createContext } from "react";

const ApeContext = createContext({});

export const ApeProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [inputFields, setInputFields] = useState({
    name: "",
    username: "",
  });

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

  
  const getApeStake = async () => {
    const apeAbi = abi.apeAbi;
    const CONTRACT_ADDRESS = "0xeF37717B1807a253c6D140Aca0141404D23c26D4";

    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      //   const signer = provider.getSigner();

      const apeCoinContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        apeAbi,
        provider
      );

      const txRes = await apeCoinContract.getAllStakes(currentAccount);

      setLoading(true);
      await txRes.wait();
      setLoading(false);

      console.log(txRes);

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

      const txRes = await contract.balanceOf(currentAccount);

      setLoading(true);
      await txRes.wait();
      setLoading(false);

      console.log(txRes);

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

      const txRes = await contract.balanceOf(currentAccount);

      setLoading(true);
      await txRes.wait();
      setLoading(false);

      console.log(txRes);

      return txRes;
    }
  };

  const getNftTransfersByWallet = async () => {
    try {
        await Moralis.start({
          apiKey: "ea7RIctgYCrticyh409mE0xSQi8nby1hsbLkL4zfopadb6ett7i6mPTDfAeHRSRD"
        });
      
        const response = await Moralis.EvmApi.nft.getWalletNFTTransfers({
          "chain": "0x1",
          "format": "decimal",
          "direction": "both",
          "address": currentAccount
        });
      
        console.log(response.raw);
        setApeNftTransfer(response.raw)

        return response.raw;
      } catch (e) {
        console.error(e);
      }
  }

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
        currentPage,
        setCurrentPage,
        inputFields,
        setInputFields,
      }}
    >
      {children}
    </ApeContext.Provider>
  );
};

export default ApeContext;
