import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  {
    id: "e2",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 6, 23),
  },

  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 500,
    date: new Date(2020, 9, 14),
  },
];
 
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
    //setExpenses([expense, ...expenses])
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
