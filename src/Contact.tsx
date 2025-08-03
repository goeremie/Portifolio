import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="">
        <h2 style={{ marginBottom: "50px" }}>Get in Touch</h2>
        <a
          href="https://www.linkedin.com/in/gabriel-eremie-0ab159250/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl shadow-md bg-white hover:bg-blue-50 transition flex justify-center"
        >
          <FaLinkedin size={100} className="text-blue-700" />
        </a>
        <a
          href="mailto:gabrieleremie100@gmail.com"
          className="p-4 rounded-xl shadow-md bg-white hover:bg-red-50 transition flex justify-center"
        >
          <FaEnvelope size={100} className="text-red-600" />
        </a>
        <a
          href="https://github.com/goeremie"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl shadow-md bg-white hover:bg-gray-100 transition flex justify-center"
        >
          <FaGithub size={100} className="text-gray-800" />
        </a>
        <a
          href="tel:+17785124454"
          className="p-4 rounded-xl shadow-md bg-white hover:bg-green-50 transition flex justify-center"
        >
          <FaPhone size={100} className="text-green-700" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
