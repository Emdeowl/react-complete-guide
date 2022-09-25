// 이 component는 사용자의 입력을 받기 위함
import React,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = ()=> {
   const [EnteredTitle,setEnteredTitle] =useState('');


    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };
    return(
        <form>
            <div className='new-expense__controls' >
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"/>                   
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31"/>
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;