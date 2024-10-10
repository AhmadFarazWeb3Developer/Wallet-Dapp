import React, { useEffect, useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoArrowForwardOutline } from "react-icons/io5";
import "./SendToken.css";
import { useNavigate } from "react-router-dom";

export default function SendTokens() {
  const [senderAddress, setSenderAddress] = useState();
  const [balance, setBalance] = useState(0);
  const [ReceiverAddress, setReceiverAddress] = useState("");
  const [ethValue, setEthValue] = useState(0);
  const [addressError, setAddressError] = useState("");
  const [ethError, setEthError] = useState("");

  useEffect(() => {
    setSenderAddress(localStorage.getItem("walletAddress"));
    setBalance(parseFloat(localStorage.getItem("Eth")) || 0); // Ensure balance is a number
  }, []);

  const navigate = useNavigate();
  const handleBackNavigate = () => {
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleContinueNavigate = () => {
    if (!addressError && !ethError) {
      navigate("/confirmTransaction");
    }
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setReceiverAddress(value);

    if (value.length !== 42 || !value.startsWith("0x")) {
      setAddressError(
        "Invalid address. Please enter a valid 42-character address starting with 0x."
      );
    } else {
      setAddressError("");
    }
  };

  const handleEthChange = (e) => {
    const value = e.target.value;
    // Ensure only numbers and one decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setEthValue(value);

      // Validation logic
      const ethAmount = parseFloat(value) || 0;
      if (ethAmount <= 0) {
        setEthError("Balance cannot be zero");
      } else if (ethAmount > balance) {
        setEthError("You don't have enough funds");
      } else {
        setEthError("");
      }
    }
  };

  return (
    <main className="bg-customDarkBlue w-1/3 h-4/5 mt-10 flex items-center flex-col rounded-md shadow-myShadow pt-2">
      <header className="flex items-center w-full pl-4">
        <div className="cursor-pointer" onClick={handleBackNavigate}>
          <IoChevronBackCircle size={24} />
        </div>
        <h1 className="ml-32 font-semibold text-gray-100">Send a Token</h1>
      </header>
      <div className="flex justify-start flex-col w-11/12">
        <div className="label">
          <span className="label-text">From</span>
        </div>
        <div className="flex items-center justify-between border border-purple-800 rounded-sm py-2 px-4 bg-purple-900 shadow-custom">
          <RxAvatar size={40} />
          <div className="w-full pl-2">
            <p>
              {senderAddress
                ? `${senderAddress
                    .slice(0, 6)
                    .toUpperCase()}.....${senderAddress
                    .slice(-6)
                    .toUpperCase()}`
                : "No Address"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mt-4">
        <div className="label">
          <span className="label-text">To</span>
        </div>
        <div>
          {addressError && (
            <label htmlFor="" className="text-red-300">
              {addressError}
            </label>
          )}
          <input
            type="text"
            value={ReceiverAddress}
            onChange={handleAddressChange}
            placeholder="Enter Public Address (0x)"
            className="input input-primary w-full text-center bg-customDarkBlue border-2 rounded-sm h-16"
          />
        </div>
      </div>
      <div className="w-11/12 mt-4">
        <div className="label">
          <span className="label-text">Amount</span>
        </div>
        <div>
          {ethError && (
            <label htmlFor="" className="text-red-300">
              {ethError}
            </label>
          )}
          <input
            type="text"
            value={ethValue}
            onChange={handleEthChange}
            placeholder="Enter Amount of ETH"
            className="input input-primary w-full text-center bg-customDarkBlue border-2 rounded-sm h-16"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 w-2/3 mt-10">
        <div
          onClick={handleCancel}
          className="flex justify-between items-center w-2/3 py-2 px-6 border border-blue-800 shadow-2xl hover:bg-blue-950 rounded-3xl cursor-pointer"
        >
          <p className="text-customBlue font-medium">Cancel</p>
          <RxCross2 size={24} color="#326BFF" />
        </div>
        <div
          onClick={handleContinueNavigate}
          className={`flex justify-around items-center w-2/3 py-2 px-6 ${
            ethError || addressError
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-800 hover:bg-customBlue cursor-pointer"
          } shadow-4xl text-white rounded-3xl`}
          disabled={!!ethError || !!addressError} // Disable button when errors exist
        >
          <p className="font-medium items-center">Continue</p>
          <div className="flex items-center">
            <IoArrowForwardOutline size={24} />
          </div>
        </div>
      </div>
    </main>
  );
}
