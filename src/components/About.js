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
          width: "30%",
        }}
      >
        My name is Ellis Chung and I am a graduate from Stony Brook University
        with a B.S. in Computer Science. At first, I had little to no interest
        in the field. During my sophomore year of high school, I was required to
        select a major to focus the rest of my studies on. Nothing really
        interested me at the time so I was completely stumped when the time came
        for me to make a choice. I sifted through major after major, only to
        find that I didn't want to pursue any of the career trajectories that
        were offered. I figured that it was my ignorance that made me feel
        indifferent so I took a shot in the dark and chose the major that was
        the least uninteresting to me, which was software engineering. The first
        class I took after getting into the major was web development. For one
        of my projects in that class, I programmed Othello from scratch using
        Javascript, HTML, and CSS. The satisfaction I felt afterwards changed my
        outlook on the major and for the first time, the schoolwork I had didn't
        feel like schoolwork because I genuinely enjoyed it. Debugging also
        didn't feel dreadful because the feeling after finding a solution
        outweighed any stress I would feel. From then on I went to tackle more
        challenging projects and just like that, my journey to pursue a career
        in computer science has started without me ever anticipating it...
        Outside of programming, my hobbies are b-boying, building PCs, and
        learning about new tech/hardware. I'm also currently studying 日本語.
        (so I can watch anime without subtitles! jk lol)
      </p>
    </div>
  );
};

export default About;