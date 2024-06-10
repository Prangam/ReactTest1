import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import ShapeButtons from './components/ShapeButtons';
import ShapeGrid from './components/ShapeGrid';
import './styles/shapes.scss';
import './i18n';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [isShapeRotated, setIsShapeRotated] = useState(false);
  const [isGridSwapped, setIsGridSwapped] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleMoveShape = () => {
    setIsShapeRotated(!isShapeRotated);
  };

  const handleMovePosition = () => {
    setIsGridSwapped(!isGridSwapped);
  };

  return (
    <Layout>
      <Header>
        <Button onClick={() => changeLanguage('en')}>EN</Button>
        <Button onClick={() => changeLanguage('th')}>TH</Button>
      </Header>
      <Content>
        <ShapeButtons onMoveShape={handleMoveShape} onMovePosition={handleMovePosition} />
        <ShapeGrid isShapeRotated={isShapeRotated} isGridSwapped={isGridSwapped} />
      </Content>
    </Layout>
  );
};

export default App;
