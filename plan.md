## Details and guidelines: 

0. the idea is to use hooks and constantly retrieve the data
const config = {
    currenciesCoin: "‪https://api.coingecko.com/api/v3/coins/list",
    currencyById: "https://api.coingecko.com/api/v3/coins",
    comparePrice: "https://min-api.cryptocompare.com/data",
    realCompareCoins: "https://min-api.cryptocompare.com/data/all/coinlist",
    // realCompareCoins-  this is their supported coins list, any other will get undefined....
    // guess I'll need to rebuild their or make other call- maybe next-time? but it does heavilly affect the project (: 
    locatedAllMarkets: "https://min-api.cryptocompare.com/data/all/exchanges"
}

0. react / package.json bootstrap install:
yarn add bootstrap
fie location:
import 'bootstrap/dist/css/bootstrap.min.css';

0. hook coins- the profound way with cache and memory etc.
https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/

0. down to earth with axios:
https://www.robinwieruch.de/react-hooks-fetch-data

0. simply put:
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>   ); }
export default App;

0. status: fetch succeeds, however data extraction from an array?


also figure out way to use hooks and useeffect in the sense for setinterval (for selected 5)

looking into ways to build the dom:
https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6

the list gets rendered.

would like to:

display data in bs grid cards
store data in an array,
refresh the array on intervals (in groups of selected 5)


eslint:
https://www.codebrain.co.il/eslint-tutorial/

axios:
https://www.codebrain.co.il/%d7%98%d7%99%d7%a4%d7%99%d7%9d-%d7%9c%d7%91%d7%99%d7%a6%d7%95%d7%a2-%d7%91%d7%a7%d7%a9%d7%95%d7%aa-http-%d7%91%d7%90%d7%9e%d7%a6%d7%a2%d7%95%d7%aa-axios/

promises:
https://www.codebrain.co.il/javascript-async-await-promises-callbacks/


0. footer getCurrentYear:
 const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
    useEffect(() => {
    getYear();
  }, []);
  {date}

