import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const urlApi = "portfolio.json"

function Card() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }



  useEffect(() => {
    fetch(urlApi)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((portfolio) => {
        setPortfolio(portfolio)
      })
      .catch((error) => {
        console.error("error fetching", error);
        console.log("error")
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading ....";
  if (error) return "Error ! ";

  return (
    <div className="cards" id="project">
      <div className="card-style">
        {portfolio.map((portfolioData) => (
          <Link
            to={`/project/${portfolioData.id}`}
            key={portfolioData.id}
            className="card"
          >
            <img loading="lazy" src={portfolioData.cover} alt={portfolioData.alt}></img>
            <p className="card-title">{portfolioData.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Card;
