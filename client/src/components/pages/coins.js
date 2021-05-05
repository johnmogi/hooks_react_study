import React from "react";
import FetchCoins from "./fetchCoins";

// const config = {
//   currenciesCoin: "‪https://api.coingecko.com/api/v3/coins/list",
//   currencyById: "https://api.coingecko.com/api/v3/coins",
//   comparePrice: "https://min-api.cryptocompare.com/data",
//   realCompareCoins: "https://min-api.cryptocompare.com/data/all/coinlist"
//    }

function Coins() {
  return (
    <div className="Coins">
      <FetchCoins />
    </div>
  );
}

export default Coins;
