import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpesesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">There are no expenses for the selected year</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpenseItem
          Key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpesesList;
