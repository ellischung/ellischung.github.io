import React from "react";

const About = () => {
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
        About Me
      </p>
      <p
        style={{
          marginBottom: "100px",
          color: "#727272",
          fontFamily: "Open Sans",
          width: "600px",
        }}
      >
        My name is Ellis Chung and I am a graduate from Stony Brook University
        with a B.S. in Computer Science. I am currently open to any tech
        opportunities and would like to learn more about tech. My interest in
        computer science started when I was a freshman in high school.
      </p>
    </div>
  );
};

export default About;