import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import ProjectContainer from "../components/project/ProjectContainer";
import Card from "../components/card/Card"
import Footer from "../components/footer/Footer";
import picture from "../pictures/banner_codeurL.webp";
import smallPicture from "../pictures/banner_codeur-mobile.webp"
import About from "../components/about/About";

const Home = () => {

  return (
    <>
      <div className="container-general">
        <Header />
        <section className="image-banner banner-home">
          <Banner
            className="image-banner"
            image={picture}
            smallImage={smallPicture}
            alt="photo écran de code"
            title1="Welcome !"
            title2="Hi, i'm Jacques, web integrator."
          />
        </section>
        <ProjectContainer />
        <Card />
        <About />
      </div>
      <Footer />
    </>
  );
};

export default Home;
