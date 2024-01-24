import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const urlApi = "portfolio.json"

function Card() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <>
      <div className="card-style" id="project">
        {portfolio.map((portfolioData) => (
          <Link
            to={`/project/${portfolioData.id}`}
            key={portfolioData.id}
            className="card"
          >
            <img loading="lazy" src={portfolioData.cover} alt={portfolioData.alt}></img>
            <h3 className="card-title">{portfolioData.title}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
export default Card;
