import React from "react";
import { TbTransfer } from "react-icons/tb";
const Transaction = () => {
  return (
    <div className=" cursor-pointer hover:bg-slate-300 w-11/12 bg-blue-50 flex  justify-between px-2 py-1 flex-row my-1 rounded-sm">
      <div className=" flex items-center gap-1">
        <TbTransfer size={26} opacity={0.7} />
        <div>
          <h1 className=" font-bold text-sm">Transfer</h1>
          <h2 className="text-xs font-mono text-green-600 ">Confirmed</h2>
        </div>
      </div>
      <div>
        <h1 className="text-sm font-medium text-red-400">-0.005 ETH</h1>
        <h2 className=" text-xs text-slate-500">Jan 24, 2024</h2>
      </div>
    </div>
  );
};

export default Transaction;
