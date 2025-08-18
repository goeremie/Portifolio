import React from "react";

const Contact: React.FC = () => {
  return (
    <div style={{ marginTop: "100px" }} className="mt-24 px-4">
      <div>
        <h2>Get in Touch</h2>

        {/* Single Grid for all 4 links */}
        <div style={{ marginTop: "50px" }}>
          <a
            href="https://www.linkedin.com/in/gabriel-eremie-0ab159250/"
            target="_blank"
            rel="noopener noreferrer"
            className="li-link p-4"
          >
            LinkedIn
          </a>

          <a
            href="mailto:gabrieleremie100@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-link p-4"
          >
            Email
          </a>

          <a
            href="https://github.com/goeremie"
            target="_blank"
            rel="noopener noreferrer"
            className="git-link p-4"
          >
            GitHub
          </a>

          <a href="tel:+17785124454" className="phone-link p-4">
            Phone
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
