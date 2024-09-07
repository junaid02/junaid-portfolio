import React from "react";

const Experience = ({ data, index }) => {
  return (
    <li style={{ marginBottom: "30px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#007bff",
            marginRight: "10px",
          }}
        >
          {index + 1}.
        </span>
        <div>
          <h5 style={{ margin: "5px 0" }}>{data.title}</h5>
          <h6 style={{ margin: 0, color: "#007bff" }}>{data.company}</h6>
          <p style={{ margin: "5px 0", color: "#00FF00" }}>
            {data.timeSpan} | {data.location}
          </p>
        </div>
      </div>
      <ul style={{ paddingLeft: "20px" }}>
        {data.responsibilities.map((responsibility, idx) => (
          <li key={idx} style={{ marginBottom: "5px" }}>
            {responsibility}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Experience;
