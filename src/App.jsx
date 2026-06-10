import { useState } from 'react';
import { ExpenseForm } from './components/ExpenseForm.jsx';
import { ExpenseList } from './components/ExpenseList.jsx';
import { Summary } from './components/Summary.jsx';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense, amount) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        id: Date.now(),
        expense,
        amount
      }
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />

      <Summary expenses={expenses} />
    </div>
  );
}

export default App;