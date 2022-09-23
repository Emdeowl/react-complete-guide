import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>우왕</div>
      <div className='expense-item_description'>
        <h2>환율</h2>
        <div className='expense-item__price'> 1490</div>
      </div>
    </div>
  );
}
// ()로 묶는 두번째 방법

export default ExpenseItem;
