import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  // filter라는 내장된 메소드를 실행.  true가 되면 반환한다.  그러기위해 return에 조건을 넣어줌
  //expense에 있는 date의 year를 4자리로 받아서 string으로 만든것과 선택된 연도가 같다면~~

  let expenseContent = <p>No expense found</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  //JSX에 있던 코드를 변수로 지정하고 if 조건문을 통하여 동적으로 변하게  만듬. 그래서 let 변수를 쓴거

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFliter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
