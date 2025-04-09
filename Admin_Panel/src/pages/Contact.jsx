import React from "react";
import { Card, Table, Typography } from "antd";

const { Title } = Typography;

// Sample contact data
const contactData = [
  {
    key: "1",
    fullName: "Emma Watson",
    email: "emma@example.com",
    phone: "9876543210",
    message: "I want to book an appointment with Dr. Smith.",
  },
  {
    key: "2",
    fullName: "Chris Evans",
    email: "chris@example.com",
    phone: "9123456789",
    message: "Need help with my appointment confirmation.",
  },
];

// Columns for the table
const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
];

const Contact = () => {
  return (
    <Card>
      <Title level={4}>Contact Submissions</Title>
      <Table columns={columns} dataSource={contactData} pagination={{ pageSize: 5 }} />
    </Card>
  );
};

export default Contact;
