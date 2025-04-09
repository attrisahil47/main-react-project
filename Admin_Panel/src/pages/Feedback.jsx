import React from "react";
import { Card, Table, Typography, Tag } from "antd";

const { Title } = Typography;

// Sample feedback data (replace with data fetched from backend)
const feedbackData = [
  {
    key: "1",
    fullName: "Alice Johnson",
    email: "alice@example.com",
    rating: 5,
    feedback: "Amazing experience! Highly recommend.",
  },
  {
    key: "2",
    fullName: "Bob Smith",
    email: "bob@example.com",
    rating: 3,
    feedback: "It was okay, but can be improved.",
  },
];

// Define table columns
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
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    render: (rating) => <Tag color="gold">{`${rating} ★`}</Tag>,
  },
  {
    title: "Feedback",
    dataIndex: "feedback",
    key: "feedback",
  },
];

const Feedback = () => {
  return (
    <Card>
      <Title level={4}>User Feedback</Title>
      <Table
        columns={columns}
        dataSource={feedbackData}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  );
};

export default Feedback;
