import { ethers } from "ethers";
const useWalletContext = () => {
  let walletAddress = "";
  let provider = "";
  let balance = "";
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
          walletAddress = walletAddresses[0];
          provider = new ethers.BrowserProvider(window.ethereum);
          balance = await provider.getBalance(walletAddress);
        }
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("MetaMask is not installed.");
    }
  };
  return { connectWallet, walletAddress, provider, balance };
};

export { useWalletContext };
