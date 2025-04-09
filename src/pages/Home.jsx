import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner_image1 from "../assets/banner_image1.jpg";
import banner_image5 from "../assets/banner_image5.jpg";
import banner_image4 from "../assets/banner_image4.jpg";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      
      {/* Swiper Image Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="my-swiper"
      >
        <SwiperSlide>
          <img src={banner_image1} alt="Slide 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_image5} alt="Slide 2" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_image4} alt="Slide 3" className="slide-image" />
        </SwiperSlide>
      </Swiper>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Our Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <i className="fa-solid fa-robot fa-2x feature-icon" />
            <h3>AI-Powered</h3>
            <p>
              Smart algorithms analyze your symptoms to provide accurate remedies.
            </p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-user-md fa-2x feature-icon" />
            <h3>Doctor Network</h3>
            <p>
              Easily find and connect with certified doctors for personalized care.
            </p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-prescription-bottle-medical fa-2x feature-icon" />
            <h3>Trusted Remedies</h3>
            <p>Access a curated list of proven home and clinical remedies.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Remedex?</h2>
        <div className="choose-cards">
          <div className="choose-card">
            <h4>24/7 Accessibility</h4>
            <p>
              Get remedy suggestions and doctor consultations anytime, anywhere.
            </p>
          </div>
          <div className="choose-card">
            <h4>Expert-Verified</h4>
            <p>All remedies are reviewed by experienced medical professionals.</p>
          </div>
          <div className="choose-card">
            <h4>Secure & Private</h4>
            <p>Your health data is encrypted and kept strictly confidential.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
