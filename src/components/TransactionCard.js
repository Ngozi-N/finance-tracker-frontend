import React from "react";

function TransactionCard({ transaction }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold">{transaction.category}</h3>
      <p className="text-gray-600">Type: {transaction.type}</p>
      <p className="text-gray-800 font-bold">${transaction.amount}</p>
    </div>
  );
}

export default TransactionCard;
