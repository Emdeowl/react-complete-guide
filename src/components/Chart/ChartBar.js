import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';
  
  if (props.max > 0) {
    // Chart에 데이터가 있다면
    barFillHeight = Math.round((props.value / props.maxValue) * 100 + '%');
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} //css를 동적으로 설정
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
