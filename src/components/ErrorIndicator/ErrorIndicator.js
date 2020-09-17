import React from "react";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="error-indicator-title">
        <h1>OOPS!</h1>
      </span>
      <span className="error-indicator-text">
        <h3>something has gone terribly wrong</h3>
      </span>
    </div>
  );
};

export default ErrorIndicator;
