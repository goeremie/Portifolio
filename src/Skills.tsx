import React from "react";

const SkillsAndResume: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Skills Section */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
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
                  textAlign: "center",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Download Section */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "400px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              color: "#374151",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            YOU CAN DOWNLOAD MY RESUME BELOW!
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
              backgroundColor: "#2563EB",
              color: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLAnchorElement).style.backgroundColor =
                "#1d4ed8")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLAnchorElement).style.backgroundColor =
                "#2563EB")
            }
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndResume;
