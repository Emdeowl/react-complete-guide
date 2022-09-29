import React from 'react';

import Chartbar from './ChartBar';
import './ChartBar.css';

const Chart = (props) => {
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
