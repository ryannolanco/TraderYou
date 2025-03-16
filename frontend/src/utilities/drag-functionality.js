import {
  arrayMove
} from '@dnd-kit/sortable';

export const handleDragOver = (event) => {
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

export const handleDragEnd = (event) => {
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