import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
	arrayMove
} from "@dnd-kit/sortable";

import "./trading-data-grid.css"

import DraggableItem from "./DraggableItem";
import initialItems from "./tradingData"

function TradingDataGrid() {
  const [items, setItems] = useState(initialItems);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

	const handleDragOver = (event) => {
		const { active, over } = event;

		if (!over) return; // If there's no item under the dragged item, do nothing

		if (active.id !== over.id) {
			setItems((prevItems) => {
				const oldIndex = prevItems.findIndex((item) => item.id === active.id);
				const newIndex = prevItems.findIndex((item) => item.id === over.id);
				return arrayMove(prevItems, oldIndex, newIndex);
			});
		}
	};

	const handleDragEnd = (event) => {
		const { active, over } = event;

		if (!over) return;

		if (active.id !== over.id) {
			setItems((prevItems) => {
				const oldIndex = prevItems.findIndex((item) => item.id === active.id);
				const newIndex = prevItems.findIndex((item) => item.id === over.id);
				return arrayMove(prevItems, oldIndex, newIndex);
			});
		}
	};

  return (
    <DndContext
      collisionDetection={closestCenter}
      sensors={sensors}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      className="dnd-context"
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="sortable-grid">
          <div className="trading-data-grid-container">
            {items.map((item) => (
              <DraggableItem
                key={item.id}
                id={item.id}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default TradingDataGrid;
