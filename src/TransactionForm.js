import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID (replace with backend-generated ID if using a backend)
      description,
      category,
      amount: parseFloat(amount),
    };

    onAddTransaction(newTransaction);

    // Clear form inputs after adding the transaction
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <div>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </div>
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
};

export default TransactionForm;
