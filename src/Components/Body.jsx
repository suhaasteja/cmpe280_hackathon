import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { DndContext } from "@dnd-kit/core";

const Body = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragEnd = (event) => {
    const { over, active } = event;
    const droppedItem = active.data.current?.item;

    if (!droppedItem) {
      console.warn("Dropped item data is missing.");
      return;
    }

    if (over && over.id === "droppable") {
      const isAlreadyDropped = droppedItems.some((item) => item.name === droppedItem.name);

      if (isAlreadyDropped) {
        alert("Chart already generated!");
      } else {
        console.log("Dropped:", droppedItem);
        setDroppedItems((items) => [...items, droppedItem]); // Store full item data
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Content droppedItems={droppedItems} />
        </div>
      </div>
    </DndContext>
  );
};

export default Body;
