import React, { useState } from 'react';
import { Layout, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
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

  const menu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage('en')}>
        EN
      </Menu.Item>
      <Menu.Item key="th" onClick={() => changeLanguage('th')}>
        TH
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div></div> {/* Empty div to push language dropdown to the right */}
        <Dropdown overlay={menu} trigger={['click']}>
          <Button>
            {i18n.language.toUpperCase()} <DownOutlined />
          </Button>
        </Dropdown>
      </Header>
      <Content>
        <ShapeButtons onMoveShape={handleMoveShape} onMovePosition={handleMovePosition} />
        <ShapeGrid isShapeRotated={isShapeRotated} isGridSwapped={isGridSwapped} />
      </Content>
    </Layout>
  );
};

export default App;
