import React, { useEffect } from "react";
import { GrActions } from "react-icons/gr";
import "./Header.css";
import { useWalletContext } from "../../../blockchain/context/useWalletConnection";
import { useComponentContext } from "../../../blockchain/context/ComponentContext";
import { useWalletDisconnect } from "../../../blockchain/context/useWalletDisconnection";

export default function Header() {
  const { connectWallet, initializeWallet } = useWalletContext();
  const { DisconnectWallet } = useWalletDisconnect();
  const { state } = useComponentContext();

  const handleWallet = () => {
    if (state.connected) {
      DisconnectWallet();
    } else {
      connectWallet();
    }
  };

  // Initialize wallet when the component mounts
  useEffect(() => {
    initializeWallet();
  }, []);

  return (
    <header className="w-full flex justify-center items-end flex-col pt-2 pr-2 gap-4">
      <button
        onClick={handleWallet}
        className="px-6 py-2 bg-customBlue text-sm rounded-sm text-white font-mono flex-col hover:bg-blue-900"
      >
        {state.connected ? <p>Disconnect Wallet </p> : <p>Connect Wallet</p>}
      </button>
      <div className="flex justify-center items-center px-16 cursor-pointer">
        <GrActions size={24} />
      </div>
    </header>
  );
}
