import React, { useState, useEffect, createContext } from "react";

const ApeContext = createContext({});

export const ApeProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWalletAddress(accounts[0]);
    return accounts[0];
  };

  return (
    <ApeContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        connectWallet,
      }}
    >
      {children}
    </ApeContext.Provider>
  );
};

export default ApeContext;
