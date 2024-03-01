import React from "react";
import { Link } from "react-router-dom";

import project_1 from "../../assets/img/project-1.png";
import project_2 from "../../assets/img/project-2.png";
import project_3 from "../../assets/img/project-3.png";
import project_4 from "../../assets/img/project-4.png";

import "../../assets/css/Portfolio.css";
const Portfolio = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div
          className="mb-4 text-center"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h2 className="section-title d-inline-block">Portfolio</h2>
          <p className="mb-0 pt-3">
            Turning ideas into elegant solutions, one line of code at a time.
          </p>
        </div>
        <div className="pt-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 py-3">
              <div
                className="item-box"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="300"
              >
                <img src={project_1} alt="Portfolio Image" />
                <div className="item-box-content">
                  <h3 className="mb-3">JavaScript Password-Generator</h3>
                  <div className="d-flex justify-content-center gap-3 align-item-center">
                    <Link to="https://yasirjamah123.github.io/week-03---JavaScript---Password-Generator/">
                      <i className="fa fa-link"></i>
                    </Link>
                    <Link to="https://github.com/yasirjamah123/week-03---JavaScript---Password-Generator">
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 py-3">
              <div className="item-box"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500">
                <img src={project_2} alt="Portfolio Image" />
                <div className="item-box-content">
                  <h3 className="mb-3">Express JS Daily Planner</h3>
                  <div className="d-flex justify-content-center gap-3 align-item-center">
                    <Link to="https://yasirjamah123.github.io/11---Express.js---Note-Taker/">
                      <i className="fa fa-link"></i>
                    </Link>
                    <Link to="https://github.com/yasirjamah123/11---Express.js---Note-Taker">
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 py-3">
              <div className="item-box"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500">
                <img src={project_3} alt="Portfolio Image" />
                <div className="item-box-content">
                  <h3 className="mb-3">Weather App</h3>
                  <div className="d-flex justify-content-center gap-3 align-item-center">
                    <Link to="https://yasirjamah123.github.io/weather-app/">
                      <i className="fa fa-link"></i>
                    </Link>
                    <Link to="https://github.com/yasirjamah123/weather-app">
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 py-3">
              <div className="item-box"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="500">
                <img src={project_4} alt="Portfolio Image" />
                <div className="item-box-content">
                  <h3 className="mb-3">JavaScript Quiz App</h3>
                  <div className="d-flex justify-content-center gap-3 align-item-center">
                    <Link to="https://yasirjamah123.github.io/week-04---Web-APIs---Code-Quiz/">
                      <i className="fa fa-link"></i>
                    </Link>
                    <Link to="https://github.com/yasirjamah123/week-04---Web-APIs---Code-Quiz">
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
