import React from "react";
import { Form, Input, Button, DatePicker, TimePicker, Select } from "antd";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const { Option } = Select;

const Booking = () => {
  const onFinish = (values) => {
    console.log("Booking values:", values);
    // Add your API call here (e.g., axios.post(...))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Booking failed:", errorInfo);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="booking-hero">
        <div className="hero-content">
          <h1 className="hero-title">Book an Appointment</h1>
          <p className="hero-subtitle">
            Schedule your visit with our expert doctors easily.
          </p>
        </div>
      </section>

      {/* Booking Form Container */}
      <div className="booking-page">
        <div className="booking-container">
          <h2 className="booking-title">Appointment Details</h2>
          <Form
            name="booking"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="booking-form"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please enter your full name!" }]}
            >
              <Input placeholder="Enter your full name" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your email" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please enter your phone number!" }]}
            >
              <Input placeholder="Enter your phone number" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Appointment Date"
              name="date"
              rules={[{ required: true, message: "Please select an appointment date!" }]}
            >
              <DatePicker className="input-field" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Appointment Time"
              name="time"
              rules={[{ required: true, message: "Please select an appointment time!" }]}
            >
              <TimePicker className="input-field" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Select Doctor"
              name="doctor"
              rules={[{ required: true, message: "Please select a doctor!" }]}
            >
              <Select placeholder="Choose a doctor" className="input-field">
                <Option value="dr-john">Dr. John Walia</Option>
                <Option value="dr-nancy">Dr. Nancy Mahajan</Option>
                <Option value="dr-akanksha">Dr. Akanksha</Option>
                <Option value="dr-harsh">Dr. Harsh Mehta</Option>
                <Option value="dr-rahul">Dr. Rahul Sharma</Option>
                <Option value="dr-priya">Dr. Priya Verma</Option>
                <Option value="dr-aman">Dr. Aman Gupta</Option>
                <Option value="dr-sneha">Dr. Sneha Kapoor</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Additional Message"
              name="message"
              rules={[{ required: false }]}
            >
              <Input.TextArea placeholder="Any special requirements?" className="input-field" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="booking-btn">
                Book Appointment
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Booking;
