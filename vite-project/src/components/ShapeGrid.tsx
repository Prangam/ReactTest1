import React, { useState } from 'react';
import { 
  CaretRightOutlined, 
  StopOutlined, 
  PlayCircleOutlined, 
  EllipsisOutlined, 
  AppstoreOutlined, 
  StarOutlined 
} from '@ant-design/icons';
import '../styles/shapes.scss';

const shapes = [
  { shape: 'triangle', icon: <CaretRightOutlined /> },
  { shape: 'square', icon: <StopOutlined /> },
  { shape: 'circle', icon: <PlayCircleOutlined /> },
  { shape: 'oval', icon: <EllipsisOutlined /> },
  { shape: 'rectangle', icon: <AppstoreOutlined /> },
  { shape: 'trapezoid', icon: <StarOutlined /> }
];

const ShapeGrid: React.FC<{isShapeRotated: boolean, isGridSwapped: boolean}> = ({ isShapeRotated, isGridSwapped }) => {
  const [shapeOrder, setShapeOrder] = useState(shapes);

  const shuffleShapes = () => {
    setShapeOrder([...shapeOrder.sort(() => Math.random() - 0.5)]);
  };

  return (
    <div className={`shape-grid ${isGridSwapped ? 'swapped' : ''}`}>
      {shapeOrder.map(({ shape, icon }, index) => (
        <div key={index} className={`shape ${shape} ${isShapeRotated ? 'rotated' : ''}`} onClick={shuffleShapes}>
          {icon}
        </div>
      ))}
    </div>
  );
};

export default ShapeGrid;
