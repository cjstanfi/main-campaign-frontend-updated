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
      <div id="geo_chart_div" className="chart geo-map py-3">
        <Chart
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
