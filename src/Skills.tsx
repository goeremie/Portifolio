import React from "react";

const SkillsAndResume: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginTop: "100px",
        flexWrap: "wrap", // Responsive: stacks on smaller screens
        padding: "0 20px",
      }}
    >
      {/* Skills Section */}
      <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            margin: 0,
          }}
        >
          {[
            "JavaScript / TypeScript",
            "React / Next.js",
            "Node.js / Express",
            "Firebase / Supabase",
            "Git / GitHub",
            "Tailwind CSS / Styled Components",
          ].map((skill, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                backgroundColor: "#f3f4f6",
                borderRadius: "0.375rem",
                marginBottom: "8px",
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Resume Download Section */}
      <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
        <p
          style={{
            fontSize: "1.125rem", // text-lg
            color: "#374151", // text-gray-700
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          YOU CAN DOWNLOAD MY RESUME BELOW:
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{
            fontWeight: "bold",
            textDecoration: "none",
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#2563EB", // Tailwind blue-600
            color: "white",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLAnchorElement).style.backgroundColor = "#1d4ed8")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLAnchorElement).style.backgroundColor = "#2563EB")
          }
        >
          DOWNLOAD
        </a>
      </div>
    </div>
  );
};

export default SkillsAndResume;
