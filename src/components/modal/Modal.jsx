import React, { useState } from "react";
import Header from "../header/Header";
import Carousel from "../carousel/Carousel";
import PortfolioDetail from "../portfolioDetail/PortfolioDetail";
import PortfolioDropdown from "../portfolioDropdown/PortfolioDropdown";
import Footer from "../footer/Footer";
/*import Carousel from "../carousel/Carousel";*/


export default function Modal({portfolioData}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          
                      <Header />
                     <Footer />
                    
                   
            
            <button className="close-modal" onClick={toggleModal}>
             X
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}