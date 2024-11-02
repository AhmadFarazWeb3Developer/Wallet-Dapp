import React, { useEffect } from "react";
import { TbTransfer } from "react-icons/tb";
import { ethers } from "ethers";
const Transaction = ({ transaction }) => {
  return (
    <div className="cursor-pointer hover:bg-slate-300 w-11/12 bg-blue-50 flex flex-col px-2 py-1 my-1 rounded-sm">
      <div className="flex justify-between items-center w-full my-1 p-2 bg-white rounded-md shadow-sm">
        <div className="flex items-center gap-1">
          <TbTransfer size={26} opacity={0.7} />
          <div>
            <h1 className="font-bold text-sm">Transfer</h1>
            <h2 className="text-xs font-mono text-green-600">Confirmed</h2>
          </div>
        </div>
        <div>
          <h1 className="text-sm font-medium text-red-400">
            {ethers.formatEther(transaction.amount.toString())} ETH
          </h1>
          <h2 className="text-xs text-slate-500">
            {new Date(Number(transaction.timestamp) * 1000).toDateString()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
