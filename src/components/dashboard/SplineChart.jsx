import React from "react";
import Chart from "react-apexcharts";

const SplineChart = ({ spineColor }) => {
  const state = {
    series: [
      {
        name: "series2",
        data: [20, 26, 28, 32, 34, 30, 25],
        color: spineColor,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 200,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      tooltip: {
        enabled: false,
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      colors: ["#DCE6EC"],
    },
  };
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        height="90"
      />
    </>
  );
};

export default SplineChart;
