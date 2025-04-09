import React from 'react';
import { Link } from 'react-router';

import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import doctor4 from "../assets/doctor4.jpg";
import doctor5 from "../assets/doctor5.jpg";
import doctor6 from "../assets/doctor6.jpg";
import doctor7 from "../assets/doctor7.jpg";
import doctor8 from "../assets/doctor8.jpg";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">About Our System</h1>
          <p className="text-xl">
            Discover how our AI-driven platform connects you with effective remedies and professional doctors.
          </p>
        </div>
      </section>

      <div className="about-container">
        <h1>ABOUT OUR SYSTEM</h1>
        <p>
          Our Doctor Remedy Recommendation System is designed to help users find the
          best remedies based on AI-driven analysis. We provide accurate
          recommendations for common health issues and connect users with
          professional doctors.
        </p>
        <h2>Our Team</h2>
        <div className="team-section">
          <Link to="/doctor1" className="team_member">
            <img src={doctor1} alt="Doctor 1" />
            <h3>Dr. John Walia</h3>
            <p>Medical Consultant</p>
          </Link>

          <Link to="/doctor2" className="team_member">
            <img src={doctor2} alt="Doctor 2" />
            <h3>Dr. Nancy Mahajan</h3>
            <p> Internal Medical Consultant</p>
          </Link>

          <Link to="/doctor4" className="team_member">
            <img src={doctor4} alt="Doctor 4" />
            <h3>Dr. Akanksha</h3>
            <p>Pediatrics Consultant</p>
          </Link>

          <Link to="/doctor3" className="team_member">
            <img src={doctor3} alt="Doctor 3" />
            <h3>Dr. Harsh Mehta</h3>
            <p>Cardiology Consultant</p>
          </Link>

          {/* Second Row */}
          <Link to="/doctor8" className="team_member">
            <img src={doctor8} alt="Doctor 8" />
            <h3>Dr. Rahul Sharma</h3>
            <p>Cardiology Consultant</p>
          </Link>

          <Link to="/doctor6" className="team_member">
            <img src={doctor6} alt="Doctor 6" />
            <h3>Dr. Priya Verma</h3>
            <p>Gynecology Consultant</p>
          </Link>

          <Link to="/doctor7" className="team_member">
            <img src={doctor7} alt="Doctor 7" />
            <h3>Dr. Aman Gupta</h3>
            <p>Orthopedics Consultant</p>
          </Link>

          <Link to="/doctor5" className="team_member">
            <img src={doctor5} alt="Doctor 5" />
            <h3>Dr. Sneha Kapoor</h3>
            <p> Pediatrics Consultant</p>
          </Link>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default About;
