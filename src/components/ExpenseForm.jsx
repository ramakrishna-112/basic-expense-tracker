import { useState } from 'react';

export const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setExpense(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!expense.trim() || !amount) {
      return;
    }

    addExpense(expense, amount);

    setExpense('');
    setAmount('');
  };

  return (
    <>
      <h2>Expense Form</h2>

      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          className="expense-input"
          placeholder="Expense"
          onChange={handleChange}
          value={expense}
          type="text"
          required
        />

        <input
          className="expense-input"
          placeholder="Money Spent"
          onChange={handleAmount}
          value={amount}
          type="number"
          required
        />

        <button className="add-btn" type="submit">
          Add Expense
        </button>
      </form>
    </>
  );
};