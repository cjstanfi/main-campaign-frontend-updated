import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import UnitedKingdomFlag from "../../assets/images/png/united-kingdom.png";
import AustraliaFlag from "../../assets/images/png/australia.png";
import UnitedStatesFlag from "../../assets/images/png/united-states.png";
const AgeGroupBarChart = () => {
  const [state, setState] = useState({
    options: {
      plotOptions: {
        bar: {
          position: "center",
          dataLabels: {
            position: "center", // top, center, bottom
          },
        },
      },
      colors: "#3B5998",
      stroke: {
        colors: ["transparent"],
        width: 35,
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
        position: "center",
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
      <div>
        <p className="font-2xl fw_600 ff_thicccboi_semibold color_dark_black ps-3">
          225.25k
        </p>
        <div className="age_chart_bg">
          <div className="d-flex justify-content-between align-items-center pt-4 px-3">
            <div className="d-flex align-items-center">
              <img src={UnitedStatesFlag} alt="united-states" />
              <p className="font-xl fw_500 ff_thicccboi_medium color_dark_black mb-0 ps-3">
                United States
              </p>
            </div>
            <p className="font-xl fw_500 ff_thicccboi_medium color_gray mb-0">
              50.2k
            </p>
          </div>
          <div className="bar_status">
            <ReactApexChart
              width="100%"
              options={state.options}
              series={state.series}
              type="bar"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center px-3 pt-4">
          <div className="d-flex align-items-center">
            <img src={UnitedKingdomFlag} alt="united-kingdom" />
            <p className="font-xl fw_500 ff_thicccboi_medium color_dark_black mb-0 ps-3">
              United Kingdom
            </p>
          </div>
          <p className="font-xl fw_500 ff_thicccboi_medium color_gray mb-0">
            41.2k
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-4 mt-sm-2 px-3">
          <div className="d-flex align-items-center">
            <img src={AustraliaFlag} alt="united-kingdom" />
            <p className="font-xl fw_500 ff_thicccboi_medium color_dark_black mb-0 ps-3">
              Australia
            </p>
          </div>
          <p className="font-xl fw_500 ff_thicccboi_medium color_gray mb-0">
            24.2k
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-sm-2 pt-4 pt-sm-5 px-3">
          <p className="font-xl fw_500 ff_thicccboi_medium color_black mb-0">
            15 more countires
          </p>
          <a
            href="/"
            className="font-md fw-normal color_blue text-decoration-none"
          >
            View all
          </a>
        </div>
      </div>
    </>
  );
};

export default AgeGroupBarChart;
