import React, { useRef } from "react";
import { FaCopy } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Transaction from "../Transaction/Transaction";
import { IoMdArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useComponentContext } from "../../../blockchain/context/ComponentContext";

export default function Home() {
  const navigate = useNavigate();
  const { state } = useComponentContext();

  const handleNavigation = () => {
    if (state.address) {
      navigate("/sendTokens");
    }
  };

  const handleCopyAddress = () => {
    if (state.address) {
      navigator.clipboard
        .writeText(state.address)
        .then(() => {
          alert("Wallet Address Copied to clipboard");
        })
        .catch(() => {
          alert("Error occurred while copying address");
        });
    }
  };

  return (
    <>
      <main className=" bg-blue-50 w-1/3 h-full flex items-center flex-col pt-1 rounded-sm shadow-myShadow ">
        <div className=" cursor-pointer flex flex-row items-center justify-center bg-slate-300 text-sm gap-x-2 py-0 px-2 rounded-sm">
          {state.connected ? (
            <p>{state.address}</p>
          ) : (
            <p>No Wallet Connected</p>
          )}
          <FaCopy onClick={handleCopyAddress} />
        </div>
        <h1 className=" text-3xl text-customDarkBlue font-bold mt-4">
          {state.balance || "0 ETH"}
        </h1>
        <button
          className={`rounded-full h-16 w-16 mt-4 border bg-customDarkBlue border-black flex justify-center items-center flex-col p-0 m-0 shadow-custom ${
            state.address
              ? "cursor-pointer hover:bg-blue-950"
              : "cursor-not-allowed opacity-50"
          }`}
          onClick={handleNavigation}
          disabled={!state.address}
        >
          <IoIosArrowRoundForward
            size={60}
            style={{ transform: "rotate(-35deg)" }}
            color="white"
          />
        </button>
        <p className=" text-customDarkBlue font-bold font-mono">Send</p>
        <div className=" text-customDarkBlue bg-customDarkBlue flex justify-center items-center py-2 h-full w-full rounded-tl-md rounded-tr-lg rounded-b-sm flex-col">
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <button className=" flex flex-row items-center justify-center rounded-2xl bg-customBlue text-white text-sm px-3 py-1 mt-2">
            <p className=" leading-none">View more</p>
            <IoMdArrowDown size={18} />
          </button>
        </div>
      </main>
    </>
  );
}
