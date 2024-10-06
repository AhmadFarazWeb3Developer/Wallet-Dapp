import React from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import { IoArrowForwardOutline } from "react-icons/io5";
import "./SendToken.css";
import { useNavigate } from "react-router-dom";

export default function SendTokens() {
  const navigate = useNavigate();
  const handleBackNavigate = () => {
    navigate("/");
  };
  const handleContinueNavigate = () => {
    navigate("/confirmTransaction");
  };
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <main className=" bg-customDarkBlue w-1/3 h-4/5 mt-10 flex items-center flex-col  rounded-md shadow-myShadow pt-2">
      <header className="flex items-center w-full pl-4 ">
        <div className="cursor-pointer" onClick={handleBackNavigate}>
          <IoChevronBackCircle size={24} color="" />
        </div>
        <h1 className=" ml-32 font-semibold  text-gray-100">Send a Token</h1>
      </header>
      <div className="flex justify-start flex-col w-11/12  mt-10">
        <div className="label">
          <span className="label-text">From</span>
        </div>
        <div className="flex items-center justify-between border border-purple-800 rounded-sm py-2 px-4 bg-purple-900 shadow-custom ">
          <RxAvatar size={40} />
          <div className="w-full pl-2">
            <label className=" font-bold">Account Name</label>
            <p>0XEL32C.....23LDA</p>
          </div>
          <div className="cursor-pointer">
            <IoChevronBackCircle
              size={30}
              className="rotate-icon border border-purple-700 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 mt-6">
        <div className="label">
          <span className="label-text">To</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Public Address (0x)"
            className="input input-primary w-full text-center bg-customDarkBlue border-2 rounded-sm h-16  "
          />
        </div>
      </div>

      <div className=" flex justify-around gap-5 items-center  w-2/3  mt-10">
        <div
          onClick={handleCancel}
          className="flex justify-between items-center w-full py-2 px-6 border border-blue-800 shadow-2xl hover:bg-blue-950 rounded-3xl cursor-pointer"
        >
          <p className=" text-customBlue font-medium">Cancel</p>
          <RxCross2 size={24} color="#326BFF" />
        </div>
        <div
          onClick={handleContinueNavigate}
          className="flex justify-around items-center w-full py-2 px-6 bg-blue-800 hover:bg-customBlue shadow-4xl text-white rounded-3xl cursor-pointer"
        >
          <p className=" font-medium items-center">Continue</p>
          <div className="flex items-center">
            <IoArrowForwardOutline size={24} />
          </div>
        </div>
      </div>
    </main>
  );
}
