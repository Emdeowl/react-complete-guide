import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';

const Expenses = (props) => {
    const [filterYear,setFilterYear]=useState('2022');

    const filterChangeHandler= selectedYear =>{
       setFilterYear(selectedYear);
    }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFliter={filterChangeHandler} />
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;