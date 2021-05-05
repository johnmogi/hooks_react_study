// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const config = {
//   currenciesCoin: "‪https://api.coingecko.com/api/v3/coins/list",
//   currencyById: "https://api.coingecko.com/api/v3/coins",
//   comparePrice: "https://min-api.cryptocompare.com/data",
//   realCompareCoins: "https://min-api.cryptocompare.com/data/all/coinlist"
//    }



function Coins() {

  const [data, setData] = useState({  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.coingecko.com/api/v3/coins/list',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

    return (
      <div className="Coins">
         {data.length}
       <ul>
       {/* {data.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}  */}
    </ul>
    

      </div>
    );
  }
  
  export default Coins;
  