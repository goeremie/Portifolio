import React from "react";

const Resume: React.FC = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <p
        className="text-lg text-gray-700 mb-6 max-w-xl"
        style={{ fontWeight: "bold" }}
      >
        YOU CAN DOWNLOAD MY RESUME BELOW:
      </p>

      <a
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          display: "inline-block",
          padding: "0.75rem 1.5rem", // py-3 = 0.75rem, px-6 = 1.5rem
          backgroundColor: "#2563EB", // Tailwind bg-blue-600 hex
          color: "white",
          borderRadius: "0.5rem", // rounded-lg = 8px = 0.5rem
          boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)", // shadow
          transition: "background-color 0.3s ease",
        }}
        href="/resume.pdf"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        DOWNLOAD
      </a>
    </div>
  );
};

export default Resume;
