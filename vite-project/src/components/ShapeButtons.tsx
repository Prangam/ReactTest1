import React from 'react';
import { Button } from 'antd';
import { LeftOutlined, SwapOutlined, RightOutlined } from '@ant-design/icons';
import '../styles/shapes.scss';

interface ShapeButtonsProps {
  onMoveShape: () => void;
  onMovePosition: () => void;
}

const ShapeButtons: React.FC<ShapeButtonsProps> = ({ onMoveShape, onMovePosition }) => {
  return (
    <div className="shape-container">
      <Button onClick={onMoveShape} className="shape-button" icon={<LeftOutlined />} />
      <Button onClick={onMovePosition} className="shape-button" icon={<SwapOutlined />} />
      <Button onClick={onMoveShape} className="shape-button" icon={<RightOutlined />} />
    </div>
  );
};

export default ShapeButtons;
