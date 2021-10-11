import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <h1 className="about-us-header">
                About Us
            </h1>
            <p className="about-us-content">
             CoinCharts brings transparency to the cryptoeconomy.
             We want to help investors, regulators, 
             and the public make sense of this revolutionary new asset class, 
             and are building data tools that will drive informed decision making and investment. 
             We believe that crypto will democratize access to information, break down data silos, 
             and ultimately give everyone the tools to build wealth.
            </p>
            <a href="https://www.coingecko.com/en/api" className="coingecko-href" target="_blank" rel="noreferrer">Powered by CoinGecko</a>
        </div>
    )
}

export default AboutUs
