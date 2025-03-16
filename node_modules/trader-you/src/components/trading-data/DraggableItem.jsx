import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

function DraggableItem({ id, content }) {
	const [isExpanded, setIsExpanded] = useState(false);
	
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

		const dynamicStyles = {
			transform: CSS.Transform.toString(transform),
			transition,
			gridColumn: isExpanded ? "span 2" : "span 1",
			gridRow: isExpanded ? "span 2" : "span 1",
			height: isExpanded ? "25rem" : "12rem", 
		};




  return (
    <div
      ref={setNodeRef}
      className={`${isExpanded ? "item-expanded" : ""} ${id} draggable`}
      style={dynamicStyles}
      {...attributes}
      {...listeners}
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded((prev) => !prev);
        }}
        onPointerDown={(e) => e.stopPropagation()} 
        onMouseDown={(e) => e.stopPropagation()}   
      >
        Expand
      </button>
				{content}
    </div>
  );
}

export default DraggableItem;
