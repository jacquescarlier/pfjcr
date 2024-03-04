import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import ProjectContainer from "../components/project/ProjectContainer";
import Footer from "../components/footer/Footer";
import picture from "../pictures/banner_codeurL.webp";
import smallPicture from "../pictures/banner_codeur-mobile.webp"
import About from "../components/about/About";
import { projects } from '../datas/data';
import Email from "../components/contactEmail/Email";
import CardModal from "../components/modal/CardModal";

const Home = () => {

  return (
    <>
      <div className="container-general">
        <Header />
        <Banner
          image={picture}
          smallImage={smallPicture}
          alt="photo écran de code"
          title1="Welcome !"
          title2="Hi, i'm Jacques, web integrator."
        />
        <ProjectContainer />
        <CardModal projects={projects}/>
        <About />
        <Email />
      </div>
      <Footer />
    </>
  );
};

export default Home;
