  import './NewExpense.css'
  import ExpenseForm from './ExpenseForm';
  
  const NewExpense = (props) => {
    const saveExpensedataHandler = (enteredexpenseData) => {
        const expenseData = {
            ...enteredexpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    };

    return ( 
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpensedataHandler}/>
        </div>
     );
};
 
export default NewExpense;