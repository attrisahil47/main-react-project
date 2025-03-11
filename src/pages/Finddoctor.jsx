import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import doctor1 from "../assets/doctor1.jpg"
import doctor2 from "../assets/doctor2.jpg"
import doctor3 from "../assets/doctor3.jpg"
import doctor4 from "../assets/doctor4.jpg"
import doctor5 from "../assets/doctor5.jpg"
import doctor6 from "../assets/doctor6.jpg"
import doctor7 from "../assets/doctor7.jpg"
import doctor8 from "../assets/doctor8.jpg"
import { NavLink } from 'react-router'

const Finddoctor = () => {
  return (
    <div>
      <>
      <Navbar/>
      <>
 
  {/* Hero Section */}
  <section className="doctor-hero">
    <div className="hero-content">
      <h1>Find a Doctor</h1>
      <p>
        Connect with qualified doctors across specialties for personalized
        healthcare advice and appointments.
      </p>
    </div>
  </section>
  {/* Search Section */}
  <section className="doctor-search">
    <form className="search-form">
      <input
        type="text"
        placeholder="Search by name, specialty, or location"
        className="search-input"
      />
      <button type="submit" className="search-btn">
        <i className="fa fa-search" /> Search
      </button>
    </form>
  </section>
  {/* Doctor List Section */}
  <section className="doctor-list">
    <h2 className="section-title">Our Doctors</h2>
    <div className="doctor-grid">
      {/* Doctor Card 1 */}
      <div className="doctor-card">
        <img src={doctor1}
          alt="Dr. John Doe"
          className="doctor-img"
        />
        <div className="doctor-info">
          <h3 className="doctor-name">Dr. John Walia</h3>
          <p className="doctor-specialty">General Medicine</p>
          <p className="doctor-location">
            <i className="fa fa-map-marker-alt" /> New York, NY
          </p>
          <button className="doctor-contact"><NavLink to="/booking">Book Appointment</NavLink></button>
        </div>
      </div>
      {/* Doctor Card 2 */}
      <div className="doctor-card">
        <img src={doctor2}
          alt="Dr. Jane Smith"
          className="doctor-img"
        />
        <div className="doctor-info">
          <h3 className="doctor-name">Dr. Nancy Mahajan</h3>
          <p className="doctor-specialty">Cardiology</p>
          <p className="doctor-location">
            <i className="fa fa-map-marker-alt" /> Los Angeles, CA
          </p>
          <button className="doctor-contact"><NavLink to="/booking">Book Appointment</NavLink></button>
        </div>
      </div>
      {/* Doctor Card 3 */}
      <div className="doctor-card">
        <img src={doctor3}
          alt="Dr. Emily Brown"
          className="doctor-img"
        />
        <div className="doctor-info">
          <h3 className="doctor-name">Dr.Harsh Mehta</h3>
          <p className="doctor-specialty">Dermatology</p>
          <p className="doctor-location">
            <i className="fa fa-map-marker-alt" /> Chicago, IL
          </p>
          <button className="doctor-contact"><NavLink to="/booking">Book Appointment</NavLink></button>
        </div>
      </div>
      {/* Doctor Card 4 */}
      <div className="doctor-card">
        <img src={doctor4}
          alt="Dr. Michael Green"
          className="doctor-img"
        />
        <div className="doctor-info">
          <h3 className="doctor-name">Dr.Akanksha</h3>
          <p className="doctor-specialty">Pediatrics</p>
          <p className="doctor-location">
            <i className="fa fa-map-marker-alt" /> Houston, TX
          </p>
          <button className="doctor-contact"><NavLink to="/booking">Book Appointment</NavLink></button>
        </div>
      </div>
      {/* Doctor Card 5 */}
      <div className="doctor-card">
        <img src={doctor8}
          alt="Dr. Sarah Lee"
          className="doctor-img"
        />
        <div className="doctor-info">
          <h3 className="doctor-name">Dr. Rahul Sharma</h3>
          <p className="doctor-specialty">Neurology</p>
          <p className="doctor-location">
            <i className="fa fa-map-marker-alt" /> Miami, FL
          </p>
          <button className="doctor-contact"><NavLink to="/booking">Book Appointment</NavLink></button>
        </div>
      </div>
      {/* Doctor Card 6 */}
      <div className="doctor-card">
        <img src={doctor6}
          alt="Dr. David Kim"
          className="doctor-img"
        />
        <div className="doctor-info">
          <h3 className="doctor-name">Dr. Priya Verma</h3>
          <p className="doctor-specialty">Orthopedics</p>
          <p className="doctor-location">
            <i className="fa fa-map-marker-alt" /> Seattle, WA
          </p>
          <button className="doctor-contact"><NavLink to="/booking">Book Appointment</NavLink></button>
        </div>
      </div>
      {/* Doctor Card 7 */}
      <div className="doctor-card">
        <img src={doctor7}
          alt="Dr. Lisa Ray"
          className="doctor-img"
        />
        <div className="doctor-info">
          <h3 className="doctor-name">Dr. Aman Gupta</h3>
          <p className="doctor-specialty">Ophthalmology</p>
          <p className="doctor-location">
            <i className="fa fa-map-marker-alt" /> San Francisco, CA
          </p>
          <button className="doctor-contact"><NavLink to="/booking">Book Appointment</NavLink></button>
        </div>
      </div>
      {/* Doctor Card 8 */}
      <div className="doctor-card">
        <img src={doctor5}
          alt="Dr. Robert Young"
          className="doctor-img"
        />
        <div className="doctor-info">
          <h3 className="doctor-name">Dr. Sneha Kapoor</h3>
          <p className="doctor-specialty">ENT</p>
          <p className="doctor-location">
            <i className="fa fa-map-marker-alt" /> Boston, MA
          </p>
          <button className="doctor-contact"><NavLink to="/booking">Book Appointment</NavLink></button>
        </div>
      </div>
    </div>
  </section>
  
</>

      <Footer/>
      </>
    </div>
  )
}

export default Finddoctor
