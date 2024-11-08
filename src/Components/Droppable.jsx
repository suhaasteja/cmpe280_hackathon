import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id
  });
  const style = {
    color: isOver ? "green" : undefined,
    padding: "20px",
    border: "1px dashed #ccc",
    height: "700px",
    margin: "50px",
    overflowY: "scroll"
  };

  return (
    <div ref={setNodeRef} id="droppable-area" style={style}>
      {children}
    </div>
  );
}
