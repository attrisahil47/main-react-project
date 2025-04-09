import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Bookings from "./pages/Bookings";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="patients" element={<Patients />} />
        <Route path="feedback" element={<Feedback/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
