// 이 component는 사용자의 입력을 받기 위함
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  //     //독립된 State 관리 방법
  const [EnteredTitle, setEnteredTitle] = useState('');
  const [EnteredAmount, setEnteredAmount] = useState('');
  const [EnteredDate, setEnteredDate] = useState('');

  //State를 한곳에서 묶어 관리 하는 방법
  // const [userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // spread를 통하여 사용하지 않는 상태를 버리지 않는다.
    // setUserInput({
    //     ...useState,
    //     enteredTitle:event.target.value
    // });

    // 만일 상태 업데이트가 이전 상태에 의존한다면 이렇게 해야한다. 그러면 최신의 상태를 유지한다.
    // userInput((prevState)=>{
    //     return({
    //         ...prevState,enteredTitle:event.target.value
    //     })
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...useState,
    //     enteredAmount:event.target.value
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...useState,
    //     enteredDate:event.target.value
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={EnteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={EnteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
