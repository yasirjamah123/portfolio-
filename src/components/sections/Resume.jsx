import React from "react";
import "../../assets/css/Resume.css";

const Resume = () => {
  return (
    <section>
      <div className="container py-5">
        <div
          className="mb-4 text-md-start text-center"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h2 className="section-title d-inline-block">Resume</h2>
        </div>
        <div className="row">
          <div
            className="col-md-6"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <h3 className="resume-heading fw-bold">Education</h3>
            <ul>
              <li>Full Stack Development Course - University of Birmingham</li>
              <li>ASAP Front End Bootcamp</li>
            </ul>

            <h3 className="resume-heading fw-bold">Key Skills:</h3>
            <ul>
              <li>Front-end Technologies: HTML5, CSS3, JavaScript</li>
              <li>
                Responsive Design: Proficient in creating visually appealing and
                adaptive interfaces for various devices
              </li>
              <li>
                Frameworks and Libraries: Experience with popular front-end
                frameworks like React and Angular
              </li>
              <li>
                UI/UX Design: Strong understanding of user interface and user
                experience principles
              </li>
              <li>
                Collaboration: Proven ability to work effectively in
                cross-functional teams, ensuring seamless integration of design
                and functionality
              </li>
              <li>
                Problem Solving: Adept at troubleshooting and finding innovative
                solutions to coding challenges
              </li>
              <li>
                Version Control: Familiarity with Git for efficient code
                management
              </li>
              <li>
                Continuous Learning: Committed to staying updated on the latest
                industry trends and technologies to deliver cutting-edge
                solutions
              </li>
            </ul>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <h3 className="resume-heading fw-bold">Professional Experience:</h3>
            <div className="mb-4">
              <h4 className="experience-title">Transport for London (TfL)</h4>
              <ul>
                <li>
                  Resolved complex issues related to fines, congestion charges,
                  and escalated cases, ensuring passenger satisfaction.
                </li>
                <li>
                  Developed expert-level knowledge of TfL's policies and
                  regulations, providing accurate assistance to passengers.
                </li>
                <li>
                  Collaborated with cross-functional teams to streamline case
                  handling processes, resulting in improved efficiency.
                </li>
                <li>
                  Actively participated in ongoing training to stay updated on
                  transportation regulations and advanced customer service
                  strategies.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="experience-title">
                HMRC (Her Majesty's Revenue and Customs)
              </h4>
              <ul>
                <li>
                  Provided exceptional customer service to taxpayers, addressing
                  inquiries and resolving tax-related issues.
                </li>
                <li>
                  Demonstrated expertise in tax policies, regulations, and
                  procedures, assisting taxpayers in compliance.
                </li>
                <li>
                  Collaborated with cross-functional teams to escalate and
                  resolve complex cases.
                </li>
                <li>
                  Engaged in ongoing training to stay updated on tax law changes
                  and customer service best practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="fw-bold">** References available upon request.</p>
      </div>
    </section>
  );
};

export default Resume;
