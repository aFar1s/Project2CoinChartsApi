import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=sgd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d%2C30d%2C200d%2C1y"
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, []);

  const changeTextField = (e) => {
    setSearch(e.target.value);
  };

  const filteredSearchString = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="search-header">Input Coin Name</h1>
        <form>
          <input
            type="text"
            className="form-coin-input"
            placeholder="Search"
            onChange={changeTextField}
          />
        </form>
      </div>
      {filteredSearchString.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            market_cap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
