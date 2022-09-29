import React from 'react';

import Chartbar from './ChartBar';
import './ChartBar.css';

const Chart = (props) => {

  const totalMaxinum =Math.max( );  //max()는 숫자가 인자로 전달되어야 하지만 현재 객체로 되어있음.

  return (
    <div>
      {props.dataPoint.map((dataPoint) => (   //map을 통하여 새로운 배열을 만든다.
        <Chartbar
          key={dataPoint.label} //효과적인 랜더링을 위함  .id라고 해도 된다.
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
