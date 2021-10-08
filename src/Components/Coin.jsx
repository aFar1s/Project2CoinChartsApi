import React from 'react'

const Coin = ({ name, image, symbol, price, volume, priceChange }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt='coin-logo' />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">SGD {price}</p>
                    <p className="coin-volume">SGD {volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent-text red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent-text green">{priceChange.toFixed(2)}%</p>
                       )}
                </div>
            </div>
        </div>
    )
}

export default Coin
