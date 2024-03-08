import React from "react";
import Footer from "../containers/footer/Footer";
import ProjectNavigation from "../components/projectNavigation/ProjectNavigation";

const Page404 = () => {
  return (
    <div>
      <div className="container-general">
        <ProjectNavigation />
        <div className="page404">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
      </div>

    </div>
  );
};

export default Page404;
