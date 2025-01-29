import React, { useEffect, useState } from "react";
import TransactionCard from "../components/TransactionCard";
import AddTransactionForm from "../components/AddTransactionForm";
import { fetchTransactions } from "../api/api";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Your Transactions</h2>
      <AddTransactionForm setTransactions={setTransactions} />
      <div className="grid gap-4 mt-4">
        {transactions.map((txn) => (
          <TransactionCard key={txn.id} transaction={txn} />
        ))}
      </div>
    </div>
  );
}

export default Transactions;
