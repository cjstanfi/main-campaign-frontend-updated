import React from "react";
import { Chart } from "react-google-charts";

const TopDemoGraphics = () => {
  const data = [
    ["Country", "Leads"],
    ["Germany", 600],
    ["United States", 600],
    ["Brazil", 600],
    ["Australia", 600],
    ["France", 600],
    ["India", 600],
  ];
  const options = {
    colors: ["#3B5998"],
    legend: "none",
  };
  return (
    <>
      <h2 className="font-xl fw-bold ff_thicccboi_bold color_gray ps-4 pt-3 pt-xl-0">
        Your top demographics
      </h2>
      <div id="geo_chart_div" className="chart geo-map py-3 overflow-auto">
        <Chart
          className="mw-100"
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </>
  );
};

export default TopDemoGraphics;
