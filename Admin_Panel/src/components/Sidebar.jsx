// Sidebar.jsx
import React from "react";
import { Menu, Layout } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ScheduleOutlined,
  TeamOutlined,
  MessageOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Sider>
      <div className="logo" style={{ color: "white", padding: 16 }}>
        Admin Panel
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
        <Menu.Item
          key="dashboard"
          icon={<DashboardOutlined />}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="doctors"
          icon={<UserOutlined />}
          onClick={() => navigate("/doctors")}
        >
          Doctors
        </Menu.Item>
        <Menu.Item
          key="patients"
          icon={<TeamOutlined />}
          onClick={() => navigate("/patients")}
        >
          Patients
        </Menu.Item>
        <Menu.Item
          key="bookings"
          icon={<ScheduleOutlined />}
          onClick={() => navigate("/bookings")}
        >
          Bookings
        </Menu.Item>
        <Menu.Item
          key="feedback"
          icon={<MessageOutlined />}
          onClick={() => navigate("/feedback")}
        >
          Feedback
        </Menu.Item>
        <Menu.Item
          key="contact"
          icon={<MailOutlined />}
          onClick={() => navigate("/contact")}
        >
          Contact
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;