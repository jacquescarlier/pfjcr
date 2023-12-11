import React from 'react';
import Carousel from "../components/carousel/Carousel";
import PortfolioDetail from "../components/portfolioDetail/PortfolioDetail"
import PortfolioDropdown from "../components/portfolioDropdown/PortfolioDropdown";
import { useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Header from '../components/header/Header';
const urlApi = "/portfolio.json"

export default function Fetch() {
    const { id } = useParams();
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

    const portfolioData = portfolio.find((item) => item.id === id)

    return (
        <div>
            {!portfolioData && (<Navigate to='Page404' replace={true} />)}
            {portfolioData && (
                <div>
                    <div className="container-general">
                        <Header />
                        <Carousel pictures={portfolioData.pictures} title={portfolioData.title} />
                        <PortfolioDetail portfolioData={portfolioData} />
                        <PortfolioDropdown description={portfolioData.description} langages={portfolioData.learning} />
                    </div>
                </div>
            )}
        </div>
    )
}