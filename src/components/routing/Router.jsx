import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Page404 from "../../pages/Page404";
import CvPdf from '../../pages/CvPdf';
function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CvPdf />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;
