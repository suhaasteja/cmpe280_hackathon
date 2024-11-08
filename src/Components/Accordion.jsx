import React from "react";
import { Draggable } from "./Draggable";

const Accordion = ({ data }) => {
  return (
    <div>
      {/* Map through the data and render each category */}
      {data.map((categoryData, index) => {
        return (
          <details key={index}>
            <summary>{categoryData.category}</summary>
            <ul id="accordion-list-container">
              {/* Map through the indicators for each category */}
              {categoryData.indicators.map((indicator, idx) => (
                <Draggable
                  key={`${categoryData.category}-${idx}`}
                  id={`${indicator.name}`}
                  data={{ category: categoryData.category, ...indicator }}
                >
                  <li>{indicator.name}</li>
                </Draggable>
              ))}
            </ul>
          </details>
        );
      })}
    </div>
  );
};

export default Accordion;
