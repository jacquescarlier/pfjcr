import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Card from "../components/card/Card"
import Footer from "../components/footer/Footer";
import picture from "../pictures/banner_codeur-unsplash.webp";
import smallPicture from "../pictures/banner_codeur-mobile.webp"
import ProjectContainer from "../components/project/ProjectContainer";
import Modal from "../components/modal/Modal";
import Accordion from "../components/accordions/Accordion";
import { accordionData } from "../datas/accordionAboutData";
import About from "../components/about/About";
const Home = () => {

  return (
    <>
      <div className="container-general">
        
        <section className="image-banner banner-home">
          <Banner
            className="image-banner"
            image={picture}
            smallImage= {smallPicture}
            alt="photo écran de code"
            title1="Welcome !"
            title2="Hi, i'm Jacques, web developer."
          />
        </section>
        <ProjectContainer />
        <Card />
        <About />
        <Modal />
      </div>
      <Footer />
    </>
  );
};

export default Home;
