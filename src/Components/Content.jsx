import React from "react";
import { Droppable } from "./Droppable";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSankey from "highcharts/modules/sankey";

// Initialize Highcharts Sankey module
HighchartsSankey(Highcharts);

// Function to generate mock data based on chart type
const generateMockData = (chartType) => {
  switch (chartType) {
    case "line":
      return Array.from({ length: 10 }, (_, i) => [
        Date.UTC(2023, 0, i + 1),
        Math.floor(Math.random() * 100),
      ]);
    case "pie":
      return [
        { name: "Group A", y: 40 },
        { name: "Group B", y: 30 },
        { name: "Group C", y: 20 },
        { name: "Group D", y: 10 },
      ];
    case "sankey":
      return [
        ["A", "B", 5],
        ["B", "C", 3],
        ["A", "C", 2],
      ];
    default:
      return [];
  }
};

// Chart Components
const LineChartComponent = ({ data, title }) => {
  const options = {
    title: { text: title },
    xAxis: { type: "datetime", title: { text: "Time" } },
    yAxis: { title: { text: "Value" } },
    series: [{ name: "Sample Data", data, type: "line", color: "#007bff" }],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const PieChartComponent = ({ data, title }) => {
  const options = {
    title: { text: title },
    series: [
      {
        type: "pie",
        name: "Percentage",
        data,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const SankeyChartComponent = ({ data, title }) => {
  const options = {
    title: { text: title },
    series: [
      {
        type: "sankey",
        keys: ["from", "to", "weight"],
        data,
        name: "Sankey Data Flow",
      },
    ],
    tooltip: { pointFormat: '<b>{point.from}</b> → <b>{point.to}</b>: {point.weight}' },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Main Content Component
const Content = ({ droppedItems }) => {
  return (
    <Droppable id="droppable">
      <div>
        {droppedItems.length > 0 ? (
          droppedItems.map((item, index) => {
            const { id, chartType, name, category } = item;
            console.log(item, id, chartType);
            const data = generateMockData(chartType);
            const title = `Chart for ${name} (${category} - ${chartType})`;

            return (
              <div key={`${category}-${index}`} style={{ marginBottom: "20px" }}>
                {/* <h4>{title}</h4> */}
                {chartType === "line" && <LineChartComponent data={data} title={title} />}
                {chartType === "pie" && <PieChartComponent data={data} title={title} />}
                {chartType === "sankey" && <SankeyChartComponent data={data} title={title} />}
              </div>
            );
          })
        ) : (
          <p>Drop items here</p>
        )}
      </div>
    </Droppable>
  );
};

export default Content;
