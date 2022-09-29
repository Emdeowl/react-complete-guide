import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

  const chartDataPoint = [
    { label: '1월', value: 0 },
    { label: '2월', value: 0 },
    { label: '3월', value: 0 },
    { label: '4월', value: 0 },
    { label: '5월', value: 0 },
    { label: '6월', value: 0 },
    { label: '7월', value: 0 },
    { label: '8월', value: 0 },
    { label: '9월', value: 0 },
    { label: '10월', value: 0 },
    { label: '11월', value: 0 },
    { label: '12월', value: 0 },
  ];

    for (const expense of props.expenses) // 모든 비용을 살펴서 합산하여 value에 보낸다.
    { 
        const expenseMonth = expense.date.getMonth();  // getMonth로 인덱스 0번부터 1월임
        chartDataPoint[expenseMonth].value += expense.amount; // 월별로 금액을 더하여 value에 대입한다.
    }
   console.log(props);

  return <Chart dataPoint={chartDataPoint}/>;
};

export default ExpensesChart;
