import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle]=  useState(props.title);  // 무조건 컴포넌트 함수 안에서 호출되어야 한다.
  //const [title, setTitle] title: 관리되고 있는 값.  (현재값)
  //setTitle :  나중에 새로운 title을 설정하기 위해 호출 할 수 있는 함수  / 업데이트 되는 값

  const clickHandler = () =>{
      setTitle('Updated!');
      console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'> ${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
