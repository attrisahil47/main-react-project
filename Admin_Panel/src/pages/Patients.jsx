import React from "react";
import { Table, Typography, Tag } from "antd";

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Condition",
    dataIndex: "condition",
    key: "condition",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Under Treatment" ? "blue" : "gold"}>
        {status}
      </Tag>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Doe",
    age: 34,
    condition: "Diabetes",
    status: "Under Treatment",
  },
  {
    key: "2",
    name: "Mary Jane",
    age: 29,
    condition: "Flu",
    status: "Recovered",
  },
];

const Patients = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Title level={3}>Patients</Title>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Patients;
