import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  Typography,
  Popconfirm,
} from "antd";

const { Title } = Typography;

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingDoctor, setEditingDoctor] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingDoctor(null);
    form.resetFields();
  };

  const handleFinish = (values) => {
    if (editingDoctor !== null) {
      const updated = doctors.map((doc) =>
        doc.key === editingDoctor.key ? { ...doc, ...values } : doc
      );
      setDoctors(updated);
    } else {
      setDoctors([...doctors, { ...values, key: Date.now() }]);
    }
    handleCancel();
  };

  const handleEdit = (record) => {
    setEditingDoctor(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleDelete = (key) => {
    setDoctors(doctors.filter((doc) => doc.key !== key));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleEdit(record)} type="link">Edit</Button>
          <Popconfirm
            title="Are you sure you want to delete this doctor?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button danger type="link">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Doctors Management</Title>
      <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
        Add Doctor
      </Button>
      <Table columns={columns} dataSource={doctors} />

      <Modal
        title={editingDoctor ? "Edit Doctor" : "Add Doctor"}
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item name="name" label="Doctor Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="specialization" label="Specialization" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Doctors;
