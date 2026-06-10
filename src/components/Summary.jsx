export const Summary = ({ expenses }) => {
  const totalExpense = expenses.reduce(
    (acc, item) => acc + Number(item.amount),
    0
  );

  return (
    <div className="summary">
      Total Expenses: ₹{totalExpense}
    </div>
  );
};