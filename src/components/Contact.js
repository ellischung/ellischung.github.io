import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p
        style={{
          marginBottom: "40px",
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Roboto Mono",
        }}
      >
        Contact
      </p>
      <p>Email</p>
      <p>GitHub</p>
      <p>CV</p>
    </div>
  );
};

export default Contact;
