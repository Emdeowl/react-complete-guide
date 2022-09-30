import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';  //css 설정을 위해 텍스트로 저장
  
  if (props.maxValue > 0) {
    // 이번 달에 소비를 했다면 
    barFillHeight = Math.round((props.value / props.maxValue) * 100 ) + '%';//round는 반올림함수
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
