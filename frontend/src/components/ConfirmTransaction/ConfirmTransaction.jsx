import React, { useEffect, useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function ConfirmTransaction() {
  const navigate = useNavigate();

  const [senderAddress, setSenderAddress] = useState();
  const [ethValue, setEthValue] = useState();
  const [receiverAddress, setReceiverAddress] = useState();
  useEffect(() => {
    const address = localStorage.getItem("walletAddress");
    setEthValue(localStorage.getItem("ethValue"));
    setReceiverAddress(localStorage.getItem("receiverAddress"));
    setSenderAddress(address);
    console.log(ethValue);
    console.log(receiverAddress);
  }, []);
  const handleBackNavigate = () => {
    navigate("/sendTokens");
  };
  const handleReject = () => {
    navigate("/");
  };

  return (
    <main className=" bg-customDarkBlue w-1/3 h-4/5 mt-10 flex items-center flex-col  rounded-md shadow-myShadow pt-2">
      <header className="flex items-center w-full pl-4 ">
        <div className="cursor-pointer" onClick={handleBackNavigate}>
          <IoChevronBackCircle size={24} color="" />
        </div>
        <h1 className=" ml-2 text-blue-800">Edit</h1>
      </header>
      <div className="flex justify-start flex-col w-11/12  mt-10">
        <div className="flex items-center justify-between gap-2 border-2 border-purple-800 rounded-sm py-2 px-2 bg-purple-900 shadow-custom ">
          <div className="flex items-center gap-1">
            <RxAvatar size={40} />
            <label className="">
              {" "}
              {senderAddress
                ? `${senderAddress
                    .slice(0, 6)
                    .toUpperCase()}.....${senderAddress
                    .slice(-6)
                    .toUpperCase()}`
                : "No Address"}
            </label>
          </div>
          <div className="border border-purple-500 rounded-full">
            <IoIosArrowRoundForward
              size={24}
              className="icon"
              color="#a46ede"
            />
          </div>
          <div className="border border-customBlue py-1 px-2  rounded-3xl">
            <p className=" text-customBlue">
              {receiverAddress
                ? `${receiverAddress
                    .slice(0, 6)
                    .toUpperCase()}.....${receiverAddress
                    .slice(-6)
                    .toUpperCase()}`
                : "No Address"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mt-10">
        <div className="w-1/2 text-center rounded-sm h-16 flex items-center justify-center border border-purple-700 ">
          <p className=" text-purple-500 font-mono  tracking-wide">
            SENDING ETH
          </p>
        </div>
        <h2 className=" text-white font-extrabold  tracking-widest italic mt-2">
          {ethValue} ?
        </h2>
      </div>

      <div className=" flex justify-around gap-5 items-center  w-2/3  mt-16">
        <div
          onClick={handleReject}
          className="flex  justify-around items-center w-full py-2 px-6 border border-blue-800 shadow-2xl hover:bg-blue-950 rounded-3xl cursor-pointer"
        >
          <p className=" text-customBlue font-medium">Reject</p>
          <RxCross2 size={24} color="#326BFF" />
        </div>
        <div className="flex  justify-around items-center w-full py-2 px-6 bg-blue-800 hover:bg-customBlue shadow-4xl text-white rounded-3xl cursor-pointer">
          <p className=" font-medium items-center">Confirm</p>
          <div className="flex items-center justify-center">
            <IoArrowForwardOutline size={24} />
          </div>
        </div>
      </div>
    </main>
  );
}
