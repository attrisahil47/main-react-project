import React from "react";
import { Layout, Avatar, Dropdown, Menu, Space } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">Edit Profile</Menu.Item>
    <Menu.Item key="2">Notifications</Menu.Item>
    <Menu.Item key="3">Support</Menu.Item>
    <Menu.Item key="4">Logout</Menu.Item>
  </Menu>
);

const AdminHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>Admin Dashboard</h3>

      <Dropdown overlay={menu} placement="bottomRight">
        <Space style={{ cursor: "pointer" }}>
          <Avatar size="large" icon={<UserOutlined />} />
          <DownOutlined />
        </Space>
      </Dropdown>
    </Header>
  );
};

export default AdminHeader;
