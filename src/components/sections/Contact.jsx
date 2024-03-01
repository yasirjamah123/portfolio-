import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Contact.css";

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div
          className="mb-4 text-center"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h2 className="section-title d-inline-block">Contact</h2>
          <p className="mb-0 pt-3">
            Connecting through code, one message at a time.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 mx-auto">
            <form method="POST" className="mt-4">
              <div
                className="form-group mb-3"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="300"
              >
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-control"
                />
              </div>
              <div
                className="form-group mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="300"
              >
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-control"
                />
              </div>
              <div
                className="form-group mb-3"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="300"
              >
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="form-control"
                />
              </div>
              <div
                className="form-group mb-3"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="300"
              >
                <label htmlFor="message">Message:</label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  required
                  className="form-control"
                />
              </div>
              <div
                className="d-flex flex-md-row flex-column gap-md-0 gap-3 justify-content-between"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="300"
              >
                <button type="submit" className="btn btn-warning fw-bold">
                  Submit
                </button>
                <div className="d-flex gap-3 align-items-center justify-content-center social-links-contact">
                  <Link to="https://www.facebook.com">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                  <Link to="https://www.twitter.com">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link to="https://www.github.com">
                    <i className="fa-brands fa-github"></i>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
