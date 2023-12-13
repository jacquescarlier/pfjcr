import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Project from "../../pages/Project"
import Page404 from "../../pages/Page404";

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/project/*" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;
