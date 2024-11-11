import React from "react";
import "./response.styles.css";

export default ({ data }) => {
  return (
    <div className="response_div">
      {typeof data === "string" ? (
        <p>{data}</p>
      ) : (
        Object.entries(data).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {String(value)}
          </p>
        ))
      )}
    </div>
  );
};
