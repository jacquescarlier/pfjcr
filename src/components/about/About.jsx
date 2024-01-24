import React from "react";
import {aboutData} from "../../datas/data"
const About = () => {
  return (
    <>
      <section className="aboutTitle" id="about">
        <h2 className="bloc">
          About
        </h2>
      </section>
      <section className="aboutSection">
        <p>{aboutData[0].content}</p>
      </section>
    </>

  );
};

export default About;

