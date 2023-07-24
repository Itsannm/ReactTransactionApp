import React from "react";

const TransactionTable = ({ transactions, searchTerm, sortOption, onDelete }) => {
  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort transactions based on the selected option
  const sortedTransactions = sortOption
    ? [...filteredTransactions].sort((a, b) =>
        a[sortOption].localeCompare(b[sortOption])
      )
    : filteredTransactions;

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>{new Date(transaction.date).toLocaleDateString()}</td>
            <td>
              <button onClick={() => onDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
