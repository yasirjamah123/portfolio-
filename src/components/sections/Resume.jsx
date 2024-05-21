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
              <h4 className="experience-title">serco</h4>
              <ul>
                <li>
                Collaborated with the engineering team to manage and enhance the company's web presence using Agile and Scrum approaches.
                </li>
                <li>
                Translated complex engineering concepts into user-friendly web interfaces, ensuring seamless device adaptation through responsive web design.
                </li>
                <li>
                  Collaborated with cross-functional teams to streamline case
                  handling processes, resulting in improved efficiency.
                </li>
                <li>
                Utilized HTML, CSS, and JavaScript to maintain and optimize the company website.
                Conducted regular code reviews focusing on performance and security, incorporating feedback into iterative development cycles.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="experience-title">
                free lance web development 
              </h4>
              <ul>
                <li>
                •	Delivered tailored web solutions for various clients, from startups to established businesses, using Agile project management.
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
