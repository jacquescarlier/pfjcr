import React, { useState } from "react";
import Arrow from "../../pictures/logo/arrow-down.webp";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(true);
 
  const handleClick = () => {
     setIsActive(!isActive);
  };
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={handleClick}>
        <div className="dropdownTitle">{title}</div>
        <div className="arrow">
          {" "}
          <img
            src={Arrow}
            alt="Fléche pour afficher le description"
            className={isActive ? "rotated" : "arrow"}
          />
        </div>
      </div>
      <div className={isActive ? "accordion-content-active" : "accordion-content"}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
