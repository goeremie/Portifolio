import React from "react";

const Contact: React.FC = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="mt-24 px-4 overflow-x-hidden overflow-y-auto"
    >
      <div className="flex flex-col items-center space-y-6">
        <h2 style={{ marginBottom: "50px" }}>Get in Touch</h2>

        <a
          href="https://www.linkedin.com/in/gabriel-eremie-0ab159250/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl shadow-md bg-white hover:bg-blue-50 transition flex justify-center"
          style={{
            color: "#2563EB", // blue-700
            fontWeight: "bold",
            fontSize: "1.5rem",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          LinkedIn
        </a>

        <a
          href="mailto:gabrieleremie100@gmail.com"
          className="p-4 rounded-xl shadow-md bg-white hover:bg-red-50 transition flex justify-center"
          style={{
            color: "#DC2626", // red-600
            fontWeight: "bold",
            fontSize: "1.5rem",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Email
        </a>

        <a
          href="https://github.com/goeremie"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl shadow-md bg-white hover:bg-gray-100 transition flex justify-center"
          style={{
            color: "#1F2937", // gray-800
            fontWeight: "bold",
            fontSize: "1.5rem",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          GitHub
        </a>

        <a
          href="tel:+17785124454"
          className="p-4 rounded-xl shadow-md bg-white hover:bg-green-50 transition flex justify-center"
          style={{
            color: "#047857", // green-700
            fontWeight: "bold",
            fontSize: "1.5rem",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
          }}
        >
          Phone
        </a>
      </div>
    </div>
  );
};

export default Contact;
