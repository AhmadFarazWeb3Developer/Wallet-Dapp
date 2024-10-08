import { useComponentContext } from "./ComponentContext";

const useWalletDisconnect = () => {
  const { setState } = useComponentContext();

  const DisconnectWallet = () => {
    localStorage.removeItem("walletAddress");
    setState((prevState) => ({
      ...prevState,
      address: "",
      connected: false,
      balance: "",
    }));
  };
  return { DisconnectWallet };
};

export { useWalletDisconnect };
