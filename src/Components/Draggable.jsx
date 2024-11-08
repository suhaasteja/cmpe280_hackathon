import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable({ id, children, data }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {item: data}
  });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}
