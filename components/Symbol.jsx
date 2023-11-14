
import React from 'react';
import { useDrag } from 'react-dnd';

const Symbol = ({ id, img }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "symbol",
        item: { id: id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
  return (
    <div style={{
      backgroundColor: isDragging ? "#fbb" : "",
    }} ref={drag}>
      <img src={img} alt="Symbol" className="w-10 h-10 " />
    </div>
  );
};

export default Symbol