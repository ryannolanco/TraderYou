import React from 'react';
import { useSortable } from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';


function DraggableItem({ id, content }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });

	const dynamicStyles = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div
			ref={setNodeRef}
			className={`${id} draggable`}
			style={dynamicStyles}
			{...attributes}
			{...listeners}
		>
		</div>
	);
}

export default DraggableItem;
