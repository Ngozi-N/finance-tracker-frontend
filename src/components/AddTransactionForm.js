import React, { useState } from "react";
import { addTransaction } from "../api/api";

function AddTransactionForm({ setTransactions }) {
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = await addTransaction({ type, category, amount });
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block">Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block">Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block">Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}
          className="w-full border p-2 rounded">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
