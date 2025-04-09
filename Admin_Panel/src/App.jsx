// App.jsx
import React from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import AdminHeader from "./components/Header"; // updated import name
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar navigation */}
      <Sidebar />

      <Layout>
        {/* Custom header with profile dropdown */}
        <AdminHeader />

        {/* Main content area */}
        <Content style={{ margin: "24px", padding: "24px", background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
