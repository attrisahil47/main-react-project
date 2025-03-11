import React from "react";
import { Form, Input, Button } from "antd";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Contact() {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    // You can add your API call here, e.g., axios.post(...)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form Submission Failed:", errorInfo);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We'd love to hear from you! Please fill out the form below or call us directly.
          </p>
        </div>
      </section>

      {/* Contact Page Wrapper */}
      <div className="contact-page">
        <div className="contact-container">
          <h2 className="text-2xl mb-4 text-black">Contact Us</h2>
          <p className="text-lg mb-4 text-[#ddd]">You will hear from us at the earliest!</p>
          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="contact-form"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please enter your full name!" },
              ]}
            >
              <Input placeholder="Full Name" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Email" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input placeholder="Phone" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea placeholder="Any comment or your query" className="input-field" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full auth-btn">
                Send
              </Button>
            </Form.Item>
          </Form>
          <p className="contact-number">
            You can also contact us at 181-1711-322
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
