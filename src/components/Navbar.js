import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-700 text-white p-4 shadow-md flex justify-between">
      <h1 className="text-2xl font-bold">Finance Tracker</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/transactions">Transactions</Link>
      </div>
    </nav>
  );
}

export default Navbar;
