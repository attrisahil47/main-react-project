import React, { useEffect, useState } from "react";
import { Form, Input, Button, Rate } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "react-toastify/dist/ReactToastify.css";

function Feedback() {
  const [form] = Form.useForm();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHeroVisible(true);
    }, 200); // Smooth animation delay
  }, []);

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/feedback", values);
      if (response.data.success) {
        toast.success("Your feedback has been submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        form.resetFields();
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit feedback!");
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section - Lighter Navbar, Darker Hero */}
      <section
        className={`w-full h-[250px] bg-[#354763] flex flex-col items-center justify-center text-white text-center px-6 
        transition-all duration-1000 ease-in-out transform ${
          heroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold mb-2">Feedback</h1>
        <p className="text-lg">We value your opinion! Let us know your thoughts and suggestions.</p>
      </section>

      {/* Feedback Form Section */}
      <div className="flex justify-center items-center py-12 px-6 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4c5d78]">Share Your Feedback</h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" className="p-3 border rounded-md w-full" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email address" },
              ]}
            >
              <Input placeholder="Enter your email" className="p-3 border rounded-md w-full" />
            </Form.Item>

            <Form.Item
              name="rating"
              label="Rate Us"
              rules={[{ required: true, message: "Please provide a rating" }]}
            >
              <Rate allowHalf />
            </Form.Item>

            <Form.Item
              name="message"
              label="Your Feedback"
              rules={[{ required: true, message: "Please enter your feedback" }]}
            >
              <Input.TextArea rows={4} placeholder="Write your feedback here..." className="p-3 border rounded-md w-full" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#4c5d78] hover:bg-[#3b4d66] text-white py-3 transition-all duration-300 ease-in-out"
              >
                Submit Feedback
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Feedback;
