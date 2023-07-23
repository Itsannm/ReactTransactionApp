import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://bankfi-react-com.onrender.com")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (id) => {
    // Filter out the transaction with the given id and update the state
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div>
      <h1>Bank Of FlatIron</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <SortButton setSortOption={setSortOption} />
      <TransactionTable
        transactions={transactions}
        searchTerm={searchTerm}
        sortOption={sortOption}
        onDelete={handleDeleteTransaction} // Pass the handleDeleteTransaction function to TransactionTable
      />
    </div>
  );
};

export default App;
