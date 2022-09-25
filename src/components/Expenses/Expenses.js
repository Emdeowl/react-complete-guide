import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFliter={filterChangeHandler}
        />
        {props.items.map((expenses) => (
          <ExpenseItem
            title={props.title}
            amount={props.amount}
            date={props.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
