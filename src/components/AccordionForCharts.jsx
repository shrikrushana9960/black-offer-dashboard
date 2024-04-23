import React from "react";

import BarChart from "../charts/BarChart";
import PolarChart from "../charts/PolarChart";
import LineChart from "../charts/LineChart";
import RadarChart from "../charts/RadarChart";
import DoughnutChart from "../charts/DoughnutChart";
import PieChart from "../charts/PieChart";

const AccordionForCharts = ({ data }) => {
  return (
    <div>
      <h3 style={{fontWeight:"bold",marginTop:"20px"}}>
        Polar Area and Doughnut Charts - represents number of countries,
        sectors, topics, pestles, sources, etc are involved
      </h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PolarChart serverData={data} />
        <DoughnutChart serverData={data} />
      </div>
      <h3 style={{fontWeight:"bold",marginTop:"20px"}}>Bar Chart- represents number of projects in each sector</h3>
      <div>
        <BarChart serverData={data} />
      </div>
      <h3 style={{fontWeight:"bold",marginTop:"20px"}}>Line Chart- represents number of projects as per pestle</h3>
      <div>
        <LineChart serverData={data} />
      </div>
      <h3 style={{fontWeight:"bold",marginTop:"20px"}}>Radar and Pie Charts- represents number of projects as per pestle</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <RadarChart serverData={data} />
        <PieChart serverData={data} />
      </div>
    </div>
  );
};

export default AccordionForCharts;
