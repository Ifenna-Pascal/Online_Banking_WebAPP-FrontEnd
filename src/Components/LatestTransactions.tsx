import React from "react";
import EachTransaction from "./EachTransaction";
import { Transactions } from "./sideUtil";

function LatestTransactions() {
  return (
    <>
      <div className="flex flex-col my-6 p-8 h-1/2 no-scrollbar overflow-y-scroll">
        <h1 className="text-2xl text-gray-600 tracking-wide font-Poppins font-semibold mb-3">
          Latest Transactions
        </h1>
        <div>
          {Transactions.map((transaction, index) => (
            <EachTransaction
              amount={transaction.amount}
              day={transaction.day}
              month={transaction.month}
              type={transaction.type}
              details={transaction.details}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestTransactions;
LatestTransactions;
