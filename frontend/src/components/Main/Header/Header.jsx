import React from "react";
import { GrActions } from "react-icons/gr";
import "./Header.css";
import { useWalletContext } from "../../../blockchain/context/walletContext";

export default function Header() {
  const { connectWallet } = useWalletContext();

  const handleWallet = () => {
    connectWallet();
    console.log(walletAddress);
  };
  return (
    <>
      <header className="w-full flex justify-center items-end flex-col pt-2 pr-2 gap-4 ">
        <button
          onClick={handleWallet}
          className="px-6 py-2 bg-customBlue text-sm rounded-sm text-white font-mono flex-col hover:bg-blue-900"
        >
          Connect Wallet
        </button>
        <div className="flex justify-center items-center px-16 cursor-pointer">
          <GrActions size={24} />
        </div>
      </header>
    </>
  );
}
