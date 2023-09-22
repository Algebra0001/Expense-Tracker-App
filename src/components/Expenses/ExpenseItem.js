import React from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const myDate = props.date;
  const myTitle = props.title;
  const myAmount = props.amount; 

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={myDate} />
        <div className="expense-item__description">
          <h2>{myTitle}</h2>
          <div className="expense-item__price">${myAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
