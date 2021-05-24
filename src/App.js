import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'semantic-ui-css/semantic.min.css'
import Loader from './components/ui/Loader';
//import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';
import MainRoutes from './routes/MainRoutes';
import './App.css';

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
      <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? <MenuUnfoldOutlined onClick={() => setCollapsed((prev) => !prev)} /> : <MenuFoldOutlined onClick={() => setCollapsed((prev) => !prev)}/>}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <MainRoutes />
          </Content>
        </Layout>
      </Layout>
      </Router>
  );
}

export default App;
