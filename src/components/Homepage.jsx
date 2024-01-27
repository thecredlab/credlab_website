import React, { useEffect, useState } from "react";
import logoBlack from "../images/logo-all-black.svg";
import downArrow from "../images/down-arrow.svg";
import AutoTypeComponent from "./AutoTypingComponent";
import Tags from "./Tags";
import Careers from "./Careers";
import Contact from "./Contact";

const Homepage = () => {
  const [activeLink, setactiveLink] = useState("");

  const handleClick = (e) => {
    setactiveLink(e);
  };
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the "home" section
      const homeSection = document.getElementById("home");
      const nextSection = document.getElementById("about");

      const homeOffset = homeSection.getBoundingClientRect().top;
      const nextSectionOffset = nextSection.getBoundingClientRect().top;

      if (
        homeOffset >= 0 &&
        homeOffset < window.innerHeight &&
        nextSectionOffset < window.innerHeight
      ) {
        setactiveLink("home");
        // } else {
        //   setactiveLink("");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const businessTags = [
    "Banking and Financial services",
    "Technology and Innovation",
    "Telecommunications",
    "Healthcare",
    "Insurance",
  ];
  const servicesTags = [
    "Software Development",
    "Machine Learning and NLP",
    "Analytics and Artificial Intelligence",
    "Business Consulting",
    "Cloud Computing Services",
  ];

  return (
    <>
      <section className="header-section">
        <header className="header">
          <img src={logoBlack} className="logo" alt="logo" />
          <nav>
            {activeLink !== "home" && (
              <a
                href="#home"
                className={`link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => handleClick("home")}
              >
                Home
              </a>
            )}
            <a
              href="#about"
              className={`link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => handleClick("about")}
            >
              About Us
            </a>
            <a
              href="#services"
              className={`link ${activeLink === "services" ? "active" : ""}`}
              onClick={() => handleClick("services")}
            >
              Services
            </a>
            <a
              className={`link ${activeLink === "careers" ? "active" : ""}`}
              href="#careers"
              onClick={() => handleClick("careers")}
            >
              Careers
            </a>
            <a
              className={`link ${activeLink === "contact" ? "active" : ""}`}
              href="#contact"
              onClick={() => handleClick("contact")}
            >
              Contact
            </a>
          </nav>
        </header>
      </section>
      <section className="herobody" id="home">
        <div className="left-side">
          <h1 className="summary">
            Fostering strategic partnerships with a Client-centric approach.
          </h1>
          <AutoTypeComponent />
        </div>
        <div className="right-side"></div>
      </section>
      <div className="down-arrow-section">
        <a href="#about">
          <span>Learn more</span>
          <span>
            <img src={downArrow} alt="down arrow icon" />
          </span>
        </a>
      </div>
      <section className="about-us" id="about">
        <h2>About Us</h2>
        <div className="about-us-summary">
          <div className="left-side">
            <p className="left-text">
              <strong className="welcome">Welcome to Credlab</strong>, a
              distinguished force in IT consulting, excelling in Talent
              Acquisition, Client Engagement, Onboarding, and Digital
              Transformation. We revolutionize Talent Acquisition, delivering
              top-tier professionals for organizational success.
            </p>
            <p className="empty"></p>
          </div>
          <div className="right-side">
            <p className="empty"></p>
            <p className="right-text">
              Through collaborative Client Engagement, we understand unique
              needs and provide tailored solutions. Our streamlined Onboarding
              ensures seamless integration, while our commitment to Digital
              Transformation propels businesses into the future. With a
              client-centric ethos, cutting-edge solutions, and seasoned
              professionals, Credlab is your trusted partner for navigating the
              intricacies of IT and maximizing digital potential.
            </p>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <h2>Services</h2>
        <div className="services-content">
          <div className="left-side">
            {/* <h3>Industries</h3> */}
            <div className="left-text">
              <h3>Business</h3>
              <Tags list={businessTags} />
            </div>
            <p className="empty"></p>
          </div>
          <div className="right-side">
            <p className="empty"></p>
            <div className="left-text">
              <h3>Solutions</h3>
              <Tags list={servicesTags} />
            </div>
          </div>
        </div>
      </section>

      <section className="careers" id="careers">
        <h2>Careers</h2>
        <Careers />
      </section>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <Contact />
      </section>
      <footer>&copy; 2024 TheCredlab. All rights reserved.</footer>
    </>
  );
};

export default Homepage;
