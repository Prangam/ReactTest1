import React from 'react';
import { Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';

interface ShapeButtonsProps {
  onMoveShape: () => void;
  onMovePosition: () => void;
}

const ShapeButtons: React.FC<ShapeButtonsProps> = ({ onMoveShape, onMovePosition }) => {
  const { t } = useTranslation();

  return (
    <Space>
      <Button onClick={onMoveShape} className="shape-button">{t('Move shape')}</Button>
      <Button onClick={onMovePosition} className="shape-button">{t('Move position')}</Button>
    </Space>
  );
};

export default ShapeButtons;
