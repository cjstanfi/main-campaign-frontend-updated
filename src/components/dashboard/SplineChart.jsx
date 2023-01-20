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
        height: 150,
        type: "area",

        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
        sparkline: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: {
          show: false,
        },
        grid: {
          show: false,
        },
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      //   annotations: {
      //     yaxis: [
      //       {
      //         y: 0,
      //         strokeDashArray: 0,
      //         borderColor: "#333",
      //         fillColor: "#c2c2c2",
      //         opacity: 0.8,
      //         offsetX: 0,
      //         offsetY: 0,
      //       },
      //     ],
      //   },
      //   xaxis: {
      //     axisBorder: {
      //       show: false,
      //     },
      //     axisTicks: {
      //       show: false,
      //     },
      //   },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: { type: "category", tickPlacement: "on" },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        lines: {
          show: false,
        },
        grid: {
          show: false,
        },
        type: "category",
        tickPlacement: "on",
      },
      legend: {
        show: false,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width={"100%"}
      />
    </>
  );
};

export default SplineChart;
