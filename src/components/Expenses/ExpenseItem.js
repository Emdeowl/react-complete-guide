import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function Expenses(props) {


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'> ${props.amount}</div>
      </div>
    </Card>
  );
}
// ()로 묶는 두번째 방법

export default Expenses;
