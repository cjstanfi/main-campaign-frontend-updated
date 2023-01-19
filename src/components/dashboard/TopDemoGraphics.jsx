import React from "react";
import { Chart } from "react-google-charts";

const TopDemoGraphics = () => {
  const data = [
    ["Country", "Leads"],
    ["Germany", 200],
    ["United States", 800],
    ["Brazil", 400],
    ["Australia", 500],
    ["France", 600],
    ["India", 400],
  ];
  const options = {
    colors: ["#3B5998"],
    legend: "none",
  };
  return (
    <>
      <div id="geo_chart_div" className="chart geo-map">
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
