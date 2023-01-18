import React, { useState } from "react";
import Chart from "react-apexcharts";

const TotalLeadsBarChart = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
      },
      show: true,
      colors: ["#3B5998", "#88FFBF"],
      axisY: {
        title: "in Eur",
        includeZero: true,
        prefix: "€",
        suffix: "k",
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },

      stroke: {
        colors: ["transparent"],
        width: 12,
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "k";
          },
        },
      },
      xaxis: {
        categories: [
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
          "Sep 2022",
          "Oct 2022",
          "Nov 2022",
          "Dec 2022",
          "Jan 2023",
          "Feb 2023",
          "Mar 2023",
          "Apr 2023",
          "May 2023",
          "Jun 2023",
        ],
        axisTicks: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 20, 35, 25, 24, 20, 35, 20, 10, 20, 25, 15],
      },
      {
        name: "series-2",
        data: [28, 30, 18, 30, 24, 8, 20, 21, 15, 20, 20, 20],
      },
    ],
  });
  return (
    <>
      <div>
        <Chart
          height={350}
          className="w-100 "
          options={state.options}
          data={state.data}
          series={state.series}
          type="bar"
          width="1100"
        />
      </div>
    </>
  );
};

export default TotalLeadsBarChart;
