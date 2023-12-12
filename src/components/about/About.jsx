import React from "react";
import Accordion from "../accordions/Accordion";
import { accordionData } from "../../datas/accordionAboutData";

const About = () => {
  /*
   <div className="accordionBody">
            {accordionData.map(({ title, content, id }) => (
              <Accordion key={id} title={title} content={content} />
            ))}
          </div>
  
  */
  return (
    <>
      <section className="aboutTitle" id="about">
        <h2 className="bloc">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </h2>
      </section>
      <section className="aboutSection">
        <p>
          Après plus de 30 années dans l'industrie en tant que technicien de production, de recherche et développement, qui m'ont permis d’acquérir des compétences telles que l’organisation, l’écoute et l'apprentissage en continu de nouvelle technologie.
          J’ai profité d'un concours de circonstance pour effectuer une reconversion professionnelle dans le développement Web, domaine qui m’intéressait depuis de nombreuses années.
        </p>
      </section>
    </>

  );
};

export default About;

