import './ExpenseItem.css'
function ExpenseItem() {

    const expenseDate =new Date(2022,9,24);
    const expenseTitle='Car Insurance';
    const expenseAmount=1490

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'> ${expenseAmount}</div>
      </div>
    </div>
  );
}
// ()로 묶는 두번째 방법

export default ExpenseItem;
