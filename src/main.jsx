import React from "react";
import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Blog from "./pages/Blog";
import Finddoctor from "./pages/Finddoctor";
import Remedies from "./pages/Remedies";
import Booking from "./pages/Booking";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/nav" element={<Navbar />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/finddoc" element={<Finddoctor />} />
      <Route path="/Remedies" element={<Remedies />} />
      <Route path="/booking" element={<Booking />} />



    </Routes>
  </BrowserRouter>
);
