import React from "react";
import Accordion from "../accordions/Accordion";
import { accordionData } from "../../datas/accordionAboutData";

const About = () => {

  return (
    <>
      <section className="aboutTitle">
        <h2 className="bloc">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </h2>
      </section>
      <section className="accordionSection">
        <div className="accordionBody">
          {accordionData.map(({ title, content, id }) => (
            <Accordion key={id} title={title} content={content} />
          ))}
        </div>
      </section>
    </>

  );
};

export default About;

