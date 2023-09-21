import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const paragraphStyle = {
    color: 'red', // Set the color to red
  }

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses =props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.lenght === 0 ? (<p style={paragraphStyle}>No items to display.</p>) : 
        (filteredExpenses.map((expense) => (
          <ExpenseItem
            Key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))}       
      </Card>
    </div>
  );
};

export default Expenses;
