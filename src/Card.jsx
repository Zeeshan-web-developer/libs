import React from "react";

function Card({
  children,
  variant = "default",
  padding = "16px",
  width = "auto"
}) {
  const styles = {
    card: {
      padding,
      borderRadius: "8px",
      width,
      boxSizing: "border-box",
      transition: "box-shadow 0.2s ease",
    },
    default: {
      backgroundColor: "#ffffff",
      border: "1px solid #e0e0e0",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
    },
    outlined: {
      backgroundColor: "#ffffff",
      border: "1px solid #ccc"
    },
    elevated: {
      backgroundColor: "#ffffff",
      border: "none",
      boxShadow: "0 6px 18px rgba(0,0,0,0.12)"
    }
  };

  return (
    <div style={{ ...styles.card, ...styles[variant] }}>
      {children}
    </div>
  );
}

export default Card;
