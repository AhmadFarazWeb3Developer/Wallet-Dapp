import { useEffect } from "react";
import { ethers } from "ethers";
import { useComponentContext } from "./ComponentContext";

const useWalletContext = () => {
  const { setState } = useComponentContext();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        });

        const walletAddresses = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (walletAddresses.length > 0) {
          const walletAddress = walletAddresses[0];
          const provider = new ethers.BrowserProvider(window.ethereum);
          const balance = await provider.getBalance(walletAddress);

          setState((prevState) => ({
            ...prevState,
            address: walletAddress,
            connected: true,
            balance: ethers.formatEther(balance),
          }));

          localStorage.setItem("walletAddress", walletAddress);
        }
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("MetaMask is not installed.");
    }
  };

  const initializeWallet = async () => {
    const storedAddress = localStorage.getItem("walletAddress");

    if (storedAddress) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(storedAddress);

      // Update state with stored values
      setState((prevState) => ({
        ...prevState,
        address: storedAddress,
        connected: true,
        balance: ethers.formatEther(balance),
      }));
    }
  };

  useEffect(() => {
    // Initialize wallet on component mount
    initializeWallet();
  }, []);

  return { connectWallet, initializeWallet };
};

export { useWalletContext };
