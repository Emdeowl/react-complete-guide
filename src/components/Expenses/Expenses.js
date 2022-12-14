import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';


const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  // filter라는 내장된 메소드를 실행.  true가 되면 반환한다.  그러기위해 return에 조건을 넣어줌
  //expense에 있는 date의 year를 4자리로 받아서 string으로 만든것과 선택된 연도가 같다면~~

 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFliter={filterChangeHandler}
        />
       <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
