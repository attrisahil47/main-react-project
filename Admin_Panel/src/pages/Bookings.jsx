import React from "react";
import { Table, Tag, Space, Button } from "antd";

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
    title: "Booking Date",
    dataIndex: "bookingDate",
    key: "bookingDate",
  },
  {
    title: "Booking Time",
    dataIndex: "bookingTime",
    key: "bookingTime",
  },
  {
    title: "Doctor",
    dataIndex: "doctor",
    key: "doctor",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Confirmed" ? "green" : "orange"}>{status}</Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="link">Edit</Button>
        <Button type="link" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    fullName: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    bookingDate: "2025-04-07",
    bookingTime: "10:00 AM",
    doctor: "Dr. Smith",
    message: "Need advice on skin care",
    status: "Confirmed",
  },
];

const Bookings = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h2>All Bookings</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Bookings;
