import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";

const data = [
  {
    category: "Macroeconomic Indicators",
    indicators: [
      {
        name: "GDP Growth Rate",
        chartType: "line",
        unit: "percentage"
      },
      {
        name: "GDP Current USD",
        chartType: "line",
        unit: "USD"
      },
      {
        name: "Current Account Balance (% of GDP)",
        chartType: "line",
        unit: "percentage"
      },
      {
        name: "Foreign direct investment, net (BoP, current US$)",
        chartType: "sankey",
        unit: "USD"
      },
      {
        name: "Foreign direct investment, net outflows (BoP, current US$)",
        chartType: "sankey",
        unit: "USD"
      },
      {
        name: "Foreign direct investment, net inflows (% of GDP)",
        chartType: "pie",
        unit: "percentage"
      },
      {
        name: "FDI-Net Outflows (% of GDP)",
        chartType: "pie",
        unit: "percentage"
      }
    ],
  },
  {
    category: "Agricultural Indicators",
    indicators: [
      {
        name: "Agricultural Contribution (% GDP)",
        chartType: "pie",
        unit: "percentage"
      },
      {
        name: "Manufacturing (% GDP)",
        chartType: "pie",
        unit: "percentage"
      },
      {
        name: "Agriculture, forestry, and fishing, value added (annual % growth)",
        chartType: "line",
        unit: "percentage"
      },
      {
        name: "Fertilizer consumption (kilograms per hectare of arable land)",
        chartType: "line",
        unit: "kg/ha"
      },
      {
        name: "Fertilizer consumption (% of fertilizer production)",
        chartType: "pie",
        unit: "percentage"
      }
    ],
  },
  {
    category: "Debt Indicators",
    indicators: [
      {
        name: "Total reserves in months of imports",
        chartType: "line",
        unit: "months"
      },
      {
        name: "Total reserves (includes gold, current US$)",
        chartType: "line",
        unit: "USD"
      },
      {
        name: "Total reserves (% of total external debt)",
        chartType: "pie",
        unit: "percentage"
      },
      {
        name: "Debt service (PPG and IMF only, % of exports of goods, services, and primary income)",
        chartType: "line",
        unit: "percentage"
      },
      {
        name: "Total debt service (% of GNI)",
        chartType: "pie",
        unit: "percentage"
      },
      {
        name: "GNI (current US$)",
        chartType: "line",
        unit: "USD"
      }
    ],
  },
  {
    category: "Food Security Indicators",
    indicators: [
      {
        name: "Saudi Arabia Wheat Imports",
        chartType: "line",
        unit: "tons"
      },
      {
        name: "Saudi Arabia Rice Imports",
        chartType: "line",
        unit: "tons"
      },
      {
        name: "Egypt Wheat Imports",
        chartType: "line",
        unit: "tons"
      },
      {
        name: "Egypt Rice Imports",
        chartType: "line",
        unit: "tons"
      }
    ],
  },
  {
    category: "Specialty Crops Indicators",
    indicators: [
      {
        name: "Walnuts Iran",
        chartType: "line",
        unit: "tons"
      },
      {
        name: "Philippines - Mangos",
        chartType: "line",
        unit: "tons"
      }
    ],
  },
];


const Sidebar = () => {
  const [sidebarContent, setSidebarContent] = useState([]);

  useEffect(() => {
    setSidebarContent(data);
  }, []);
  
  return (
    <div>
      <Accordion data={sidebarContent} />
    </div>
  );
};

export default Sidebar;
