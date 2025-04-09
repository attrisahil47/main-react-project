import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { NavLink } from "react-router";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import doctor4 from "../assets/doctor4.jpg";
import doctor5 from "../assets/doctor5.jpg";
import doctor6 from "../assets/doctor6.jpg";
import doctor7 from "../assets/doctor7.jpg";
import doctor8 from "../assets/doctor8.jpg";

// Doctors Data
const doctors = [
  { id: 1, name: "Dr. John Walia", specialty: "General Medicine", location: "Chandigarh, India", image: doctor1 },
  { id: 2, name: "Dr. Nancy Mahajan", specialty: " Internal Medicine", location: "Delhi, India", image: doctor2 },
  { id: 3, name: "Dr. Harsh Mehta", specialty: "Cardiology", location: "Mumbai, India", image: doctor3 },
  { id: 4, name: "Dr. Akanksha", specialty: "Pediatrics", location: "Pune, Maharashtra", image: doctor4 },
  { id: 5, name: "Dr. Rahul Sharma", specialty: " Cardiology", location: "Delhi, India", image: doctor8 },
  { id: 6, name: "Dr. Priya Verma", specialty: "Gynecology", location: "Lucknow, India", image: doctor6 },
  { id: 7, name: "Dr. Aman Gupta", specialty: "Orthopedics", location: "Chandigarh, India", image: doctor7 },
  { id: 8, name: "Dr. Sneha Kapoor", specialty: "Pediatrics", location: "Mumbai, India", image: doctor5 },
];

const Finddoctor = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  // 🔍 Filter doctors based on search input
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <>
        {/* Hero Section */}
        <section className="doctor-hero">
          <div className="hero-content">
            <h1>Find a Doctor</h1>
            <p>Connect with qualified doctors across specialties for personalized healthcare advice and appointments.</p>
          </div>
        </section>

        {/* Search Section */}
        <section className="doctor-search">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search by doctor's name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="button" className="search-btn">
              <i className="fa fa-search" /> Search
            </button>
          </form>
        </section>

        {/* Doctor List Section */}
        <section className="doctor-list">
          <h2 className="section-title">Our Doctors</h2>
          <div className="doctor-grid">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="doctor-card">
                  <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                    <p className="doctor-location">
                      <i className="fa fa-map-marker-alt" /> {doctor.location}
                    </p>
                    <button className="doctor-contact">
                      <NavLink to="/booking">Book Appointment</NavLink>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No doctors found.</p>
            )}
          </div>
        </section>
      </>

      <Footer />
    </div>
  );
};

export default Finddoctor;

