import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AgeGroupBarChart = () => {
  const [state, setState] = useState({
    options: {
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      colors: "#3B5998",
      stroke: {
        colors: ["transparent"],
        width: 0,
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return Number(val).toLocaleString() + "€";
        },
        offsetY: 0,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: ["18-24", "25-34", "45-54", "65+"],
        position: "bottom",
      },
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return Number(val).toLocaleString() + "€";
          },
        },
      },
      title: {
        text: "Age groups",
        floating: true,
        offsetY: 0,
        align: "center",
        style: {
          color: "#444",
        },
      },
      chart: {
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
      },
    },
    series: [
      {
        name: "Chiffre d'affaires",
        data: [8976, 12987, 9853, 10986],
      },
    ],
  });
  return (
    <>
      <div className="bg-age-group-wrapper">
        <ReactApexChart
          width={350}
          options={state.options}
          series={state.series}
          type="bar"
          height="300"
        />
      </div>
    </>
  );
};

export default AgeGroupBarChart;
