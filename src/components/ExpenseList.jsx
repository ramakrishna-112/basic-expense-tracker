export const ExpenseList = ({ expenses, deleteExpense }) => {

  if (expenses.length === 0) {
    return (
      <div className="expense-list">
        <h2>Expense List</h2>
        <p className="empty-message">
          No expenses added yet.
        </p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h2>Expense List</h2>

      {expenses.map((item) => (
        <div className="expense-item" key={item.id}>
          <span>
            {item.expense} - ₹{item.amount}
          </span>

          <button
            className="delete-btn"
            onClick={() => deleteExpense(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};