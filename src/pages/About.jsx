import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import picture from "../pictures/frontend-unsplash.webp";
import smallPicture from "../pictures/frontend-mobile.webp"
import Accordion from "../components/accordions/Accordion";
import { accordionData } from "../datas/accordionAboutData";

const About = () => {

  return (
    <div>
      <div className="container-general">
        <Header />
       <section className="image-banner banner-about">
        <Banner image={picture} smallImage ={smallPicture} alt="photo de montagne" title1="About me" title2=""  />
        </section>
        <section className="accordionSection">
          <div className="accordionBody">
            {accordionData.map(({ title, content, id }) => (
              <Accordion key={id} title={title} content={content} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;

