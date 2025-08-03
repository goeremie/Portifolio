import React from "react";

const Skills: React.FC = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <ul
        style={{
          listStyleType: "none",
          maxWidth: "300px",
          paddingLeft: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <li
          style={{
            padding: "10px",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
            marginBottom: "8px",
          }}
        >
          JavaScript / TypeScript
        </li>
        <li
          style={{
            padding: "10px",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
            marginBottom: "8px",
          }}
        >
          React / Next.js
        </li>
        <li
          style={{
            padding: "10px",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
            marginBottom: "8px",
          }}
        >
          Node.js / Express
        </li>
        <li
          style={{
            padding: "10px",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
            marginBottom: "8px",
          }}
        >
          Firebase / Supabase
        </li>
        <li
          style={{
            padding: "10px",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
            marginBottom: "8px",
          }}
        >
          Git / GitHub
        </li>
        <li
          style={{
            padding: "10px",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
          }}
        >
          Tailwind CSS / Styled Components
        </li>
      </ul>
    </div>
  );
};

export default Skills;
