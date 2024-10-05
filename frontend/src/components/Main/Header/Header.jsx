import React from "react";
import { GrActions } from "react-icons/gr";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header className="w-full flex justify-center items-end flex-col pt-2 pr-2 gap-4 ">
        <button className="px-6 py-2 bg-customBlue text-sm rounded-sm text-white font-mono flex-col hover:bg-blue-900">
          Connect Wallet
        </button>
        <div className="flex justify-center items-center px-16 cursor-pointer">
          <GrActions size={24} />
        </div>
      </header>
    </>
  );
}
