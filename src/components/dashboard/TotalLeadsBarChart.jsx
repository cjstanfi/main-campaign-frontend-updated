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
      fill: {
        type: "pattern",
        pattern: {
          style: "verticalLines",
          width: 2,
          height: 1,
          strokeWidth: 12,
        },
      },

      // fill: {
      // type: "gradient",
      // gradient: {
      // shade: "light",
      // type: "horizontal",
      // shadeIntensity: 1,
      // gradientToColors: ["#88FFBF", "rgba(62, 254, 151, 0.12)"], // optional, if not defined - uses the shades of same color in series
      // inverseColors: true,
      // opacityFrom: 1,
      // opacityTo: 1,
      // stops: [70, 90, 100],
      // colorStops: [],
      // },
      // },
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
        colors: "#7D889E",
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      markers: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
      stroke: {
        colors: ["transparent"],
        width: 14,
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "k";
          },
          colors: "#7D889E",
        },
      },
      xaxis: {
        fill: {
          type: "solid",
          color: "#B1B9C4",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
        crosshairs: {
          show: true,
          width: 1,
          position: "back",
          opacity: 0.9,
          stroke: {
            color: "#b6b6b6",
            width: 0,
            dashArray: 0,
          },
          fill: {
            type: "solid",
            color: "#B1B9C4",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 1,
            opacity: 0.4,
          },
        },
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
        name: "Leads",
        data: [30, 20, 35, 25, 24, 20, 35, 20, 10, 20, 25, 15],
        colors: "#7D889E",
      },
      {
        name: "Revenue",
        data: [28, 30, 18, 30, 24, 8, 20, 21, 15, 20, 20, 20],
      },
    ],
  });
  return (
    <>
      <div className="overflow-auto">
        <Chart
          height={350}
          options={state.options}
          data={state.data}
          series={state.series}
          type="bar"
          width="100%"
          className="min_width_900"
        />
      </div>
    </>
  );
};

export default TotalLeadsBarChart;
