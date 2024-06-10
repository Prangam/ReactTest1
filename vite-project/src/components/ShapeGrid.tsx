import React, { useState } from 'react';
import '../styles/shapes.scss';

const shapes = ['triangle', 'square', 'circle', 'oval', 'rectangle', 'trapezoid'];

const ShapeGrid: React.FC<{isShapeRotated: boolean, isGridSwapped: boolean}> = ({ isShapeRotated, isGridSwapped }) => {
  const [shapeOrder, setShapeOrder] = useState(shapes);

  const shuffleShapes = () => {
    setShapeOrder([...shapeOrder.sort(() => Math.random() - 0.5)]);
  };

  return (
    <div className={`shape-grid ${isGridSwapped ? 'swapped' : ''}`}>
      {shapeOrder.map((shape, index) => (
        <div key={index} className={`shape ${shape} ${isShapeRotated ? 'rotated' : ''}`} onClick={shuffleShapes}>
          {shape}
        </div>
      ))}
    </div>
  );
};

export default ShapeGrid;
