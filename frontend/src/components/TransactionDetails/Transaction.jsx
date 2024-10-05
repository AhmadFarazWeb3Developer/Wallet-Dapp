import React from "react";

export const Transaction = () => {
  return (
    <main className="bg-customDarkBlue w-1/3 h-4/5 mt-10 flex items-center flex-col rounded-md shadow-myShadow">
      <header className="flex items-center justify-center bg-slate-50 py-2 px-10 rounded-b-sm">
        <h1 className="text-customDarkBlue font-jetbrains">
          Transaction Details
        </h1>
      </header>

      <div className="flex items-start flex-col w-full p-4 text-sm mt-2">
        <div className="w-full bg-slate-900 shadow-custom rounded-sm p-1 text-slate-200">
          <h1>TRANSACTION HASH :</h1>
          <div className="flex flex-col">
            <span>6586BC035202DFF98A67B814ACA615E613CBBFAE8FFA9F4A47</span>
            <span>DA0FAEF079C9D5</span>
          </div>
        </div>
        <div className=" text-slate-200 font-medium flex gap-4 flex-col mt-4">
          <div>
            <label htmlFor="">Nonce:</label>
          </div>
          <div>
            <label htmlFor="">Gas Price:</label>
          </div>
          <div>
            <label htmlFor="">Gas Limit: </label>
          </div>

          <div>
            <label htmlFor="">Recepient</label>
          </div>
          <div>
            <label htmlFor="">Value</label>
          </div>
          <div>
            <label htmlFor="">Data</label>
          </div>
          <div>
            <label htmlFor="">s,v,r</label>
          </div>
        </div>
      </div>
    </main>
  );
};
