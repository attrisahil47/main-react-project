import React from "react";
import banner_image1 from "../assets/banner_image1.jpg";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>


        {/* Banner Section */}
        <div className="relative w-full h-[750px] flex justify-center items-center">
          <img
            src={banner_image1}
            alt="Doctor Remedy Banner"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black">
            <h1 className="text-4xl font-bold">Welcome to Our System</h1>
            <p className="text-lg !text-black">Intelligent remedy recommendations at your fingertips.</p>
          </div>

        </div>
      </div>

      <>
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
              <h4>Secure &amp; Private</h4>
              <p>Your health data is encrypted and kept strictly confidential.</p>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="testimonials">
          <h2 className="section-title">Testimonials</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Remedex helped me quickly find a remedy for my migraine. The results
                were spot on!"
              </p>
              <h5 className="testimonial-author">- Sarah K.</h5>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "I love how easy it is to book a doctor appointment through this
                platform. Highly recommend!"
              </p>
              <h5 className="testimonial-author">- Mark W.</h5>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="cta">
          <h2>Ready to Get Started?</h2>
          <p>
            Join our community of satisfied users and start your journey to better
            health.
          </p>
          <a href="#" className="cta-button">
            Sign Up Now
          </a>
        </section>

        <Footer />

      </>

    </>

  );
};

export default Home;
