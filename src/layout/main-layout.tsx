import React, { useState } from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { LayoutData } from './layoutData';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const items = LayoutData.map((item) => ({
  key: item.id,
  label: <Link to={item.path}>{item.label}</Link>,
  icon: React.createElement(item.icon)
}));

export const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const {
    token: { colorBgContainer},
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        onCollapse={(collapsed) => {
          setCollapsed(collapsed);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              display: "block",
              fontSize: "16px",
              width: "64px",
              height: "64px"
            }}>

          </Button>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Admin {new Date().getFullYear()} Created by Ant
        </Footer>
      </Layout>
    </Layout>
  );
};
