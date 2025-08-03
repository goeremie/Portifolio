import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import photo from "../assets/photo.jpg";

// Importing the pages (you’ll need to create these)
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Gabriel Eremie
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/skills" className="nav-link">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Links
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-grow-1 container text-center py-5">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1
                    className="h3 fst-italic fw-bold mb-4"
                    style={{ paddingTop: "100px" }}
                  >
                    "driven by curiosity, refined through code."
                  </h1>

                  {/* Image + Paragraph */}
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <img
                        src={photo} // Replace with your actual image path
                        alt="Gabriel Eremie"
                        className="img-fluid rounded-circle shadow"
                        style={{
                          width: "250px",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="col-md-7 text-start">
                      <p className="lead">
                        Hello! I’m a Computer Science graduate from Thompson
                        Rivers University with a strong foundation in software
                        engineering, data structures, and algorithm design. My
                        interests lie in full-stack development, with a growing
                        focus on the gaming industry. I’ve worked on real-world
                        projects, including an AI-powered quiz builder and
                        cross-platform e-commerce systems, gaining hands-on
                        experience with tools like React, Node.js, Python, and
                        SQL. I'm passionate about building impactful,
                        user-centered applications and continuously refining my
                        skills in modern development practices.
                      </p>
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white py-3 mt-auto">
          <div className="container text-center">
            <small>
              &copy; {new Date().getFullYear()} Gabriel Eremie. All rights
              reserved.
            </small>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
