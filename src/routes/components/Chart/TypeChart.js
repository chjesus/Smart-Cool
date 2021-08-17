import React from 'react';
import Chart from 'react-google-charts';

function TypeChart(props) {
  const { type, data, options, title } = props;
  return (
    <Chart
      chartType={type}
      data={data}
      options={{ ...options, title }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

export default TypeChart;
