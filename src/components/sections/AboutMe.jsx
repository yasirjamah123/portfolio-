import React from "react";
import { Link } from "react-router-dom";
import about_img from "../../assets/img/about-img.jpg";
import "../../assets/css/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="mb-4 text-md-start text-center" data-aos="fade-right" data-aos-duration="500">
          <h2 className="section-title d-inline-block">About Me</h2>
        </div>
        <div className="pt-4">
          <div className="row text-md-start text-center">
            <div className="col-xl-7 col-lg-6" data-aos="fade-up" data-aos-duration="500">
              <h3 className="sub-title fw-bold">YASIR JAMAH</h3>
              <p className="section-text">
                Versatile front-end developer with a flair for crafting engaging
                and user-centric interfaces. Proficient in HTML, CSS, and
                JavaScript, I bring creativity and technical expertise to ensure
                seamless and visually captivating web experiences. A
                collaborative team player, I've successfully contributed to
                projects by integrating modern design principles and staying
                abreast of industry innovations. Eager to leverage my skills and
                passion for front-end development to drive impactful solutions
                and exceed user expectations.
              </p>
            </div>
            <div className="col-xl-5 col-lg-6" data-aos="zoom-in" data-aos-duration="500">
              <img src={about_img} alt="About Image" className="rounded img-fluid about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
