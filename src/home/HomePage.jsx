import React, { useState, useEffect } from "react";
import "../home/HomePage.css"; // Import your Mini CSS styles for the carousel
import { Link } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const HomePage = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide, onCancel] = useState(0);

  // Array of slide data, each containing an image URL, title, and description
  const slides = [
    {
      imageUrl: "/img/menu1.png",
      title: "Rumah Makan",
      description: "Padang Sederhana",
    },
    {
      imageUrl: "/img/menu3.png",
      title: "adsas",
      description: "afasfa",
    },
    {
      imageUrl: "/img/menu4.png",
      title: "askdkasdna",
      description: "sacascadawdac",
    },
  ];

  // Function buat pindah ke next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function buat pindah ke slide awal
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Automatic pindah ke next slide selama 4 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              className="content"
            >
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        <div className="controls">
          <button onClick={prevSlide}>&#10094;</button>
          <button onClick={nextSlide}>&#10095;</button>
        </div>
        <div className="indicators">
          {slides.map((slide, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      <div className="menugokil">
        <h1>
          <MdStars size={30} /> MENU PALING BEST SELLER <MdStars size={30} />
        </h1>
        <div className="menu-container">
          <div className="menu-item">
            <img src="/img/menu 2.png" alt="Menu 2" />
            <h2>NASI PADANG</h2>
          </div>
          <div className="menu-item">
            <img src="/img/menu 2.png" alt="Menu 6" />
            <h2>NASI PADANG</h2>
          </div>
          <div className="menu-item">
            <img src="/img/menu 2.png" alt="Menu 7" />
            <h2>NASI PADANG</h2>
          </div>
        </div>
        <Link
          to="http://localhost:3000/projects"
          type="button"
          className="btn"
          onClick={onCancel}
        >
          Full Menu
        </Link>
      </div> 
        <h1>LOKASI KITA <FaLocationDot size={30}/></h1>
      <div className="gmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.703308085334!2d106.67730987400819!3d-6.302658861680726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fad4968a9f77%3A0x38fdcf75422d2ac6!2sJl.%20Rawa%20Buntu%20Utara%2C%20Kec.%20Serpong%2C%20Kota%20Tangerang%20Selatan%2C%20Banten!5e0!3m2!1sid!2sid!4v1709287323906!5m2!1sid!2sid"
          width="950"
          height="550"
          style={{
            border: "1px, solid",
            padding: "10px",
            boxShadow: "5px 10px red",
            borderRadius: "10px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    {/* footer */}
      <div className="footer">
        <div className="footer-list">
          <div className="footer-item">
            <FaPhoneAlt  className="footer-icon" />
            <a>081617631824</a>
          </div>
          <div className="footer-item">
            <MdEmail className="footer-icon" />
            <a>radityavano08@gmail.com</a>
          </div>
          <div className="footer-item">
            <FaGithub className="footer-icon" />
            <a href="https://github.com/dityaaaw">GitHub</a>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-copyright">
          <p>&copy; 2024 Raditya Radius Silvano</p>
        </div>
      </div>
    </div>
  );
};

// Footer


export default HomePage;
