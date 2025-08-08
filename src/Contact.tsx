import React from "react";

const Contact: React.FC = () => {
  return (
    <div style={{ marginTop: "100px" }} className="mt-24 px-4">
      <div className="flex flex-col items-center">
        <h2 className="mb-12 text-3xl font-bold">Get in Touch</h2>

        {/* First Grid */}
        <div
          style={{ marginTop: "50px" }}
          className="grid grid-cols-2 gap-6 max-w-md mx-auto w-full"
        >
          <a
            href="https://www.linkedin.com/in/gabriel-eremie-0ab159250/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl shadow-md bg-white hover:bg-blue-50 transition flex justify-center items-center"
            style={{
              color: "#2563EB",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textDecoration: "none",
              width: "100%",
            }}
          >
            LinkedIn
          </a>

          <a
            href="mailto:gabrieleremie100@gmail.com"
            className="p-4 rounded-xl shadow-md bg-white hover:bg-red-50 transition flex justify-center items-center"
            style={{
              color: "#DC2626",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textDecoration: "none",
              width: "100%",
            }}
          >
            Email
          </a>
        </div>

        {/* Second Grid */}
        <div
          style={{ marginTop: "50px" }}
          className="grid grid-cols-2 gap-6 max-w-md mx-auto w-full mt-6"
        >
          <a
            href="https://github.com/goeremie"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl shadow-md bg-white hover:bg-gray-100 transition flex justify-center items-center"
            style={{
              color: "#1F2937",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textDecoration: "none",
              width: "100%",
              marginLeft: "11px",
              marginRight: "3px",
            }}
          >
            GitHub
          </a>

          <a
            href="tel:+17785124454"
            className="p-4 rounded-xl shadow-md bg-white hover:bg-green-50 transition flex justify-center items-center"
            style={{
              color: "#047857",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textDecoration: "none",
              width: "100%",
              marginLeft: "13px",
              marginRight: "2px",
            }}
          >
            Phone
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
