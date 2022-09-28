import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);  // 이 함수가 실행이 되면 화면에 보여야한다.
  };

  const stopEditingHandler = ()=>{
    setIsEditing(false);
  }
  
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
      {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}  onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
