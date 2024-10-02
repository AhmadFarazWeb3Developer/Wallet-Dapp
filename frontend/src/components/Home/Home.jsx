import React from "react";
import { FaCopy } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Transaction from "../Transaction/Transaction";
import { IoMdArrowDown } from "react-icons/io";
export default function Home() {
  return (
    <>
      <main className=" bg-blue-50 w-1/3 h-full flex items-center flex-col pt-1 rounded-sm shadow-myShadow ">
        <div className=" cursor-pointer flex flex-row items-center justify-center bg-slate-300 text-sm gap-x-2 py-0 px-2 rounded-sm">
          <p>0xEDCFC....70ASD</p>
          <FaCopy />
        </div>
        <h1 className=" text-3xl text-customDarkBlue font-bold mt-4">
          17.353453 ETH
        </h1>
        <button className="rounded-full h-16 w-16 mt-4 border bg-customDarkBlue border-black flex justify-center items-center flex-col cursor-pointer p-0 m-0 shadow-custom hover:bg-blue-950 ">
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
