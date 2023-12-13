import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Page404 = () => {
  return (
    <div>
      <div className="container-general">
        <Header />
        <div className="page404">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
      </div>

    </div>
  );
};

export default Page404;
