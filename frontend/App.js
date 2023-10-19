import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useGeceModu from "./hooks/useGeceModu";
import useLocalStorage from "./components/useLocalStorage";


const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModu, setGeceModu] = useGeceModu(true);
  const [lsData, storage] = useLocalStorage("geceModu", "ilk data")


  /*  useEffect(() => {
     axios
       .get(
         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
       )
       .then(res => setCoinData(res.data))
       .catch(err => console.log(err));
   }, []); */
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />

      <h3 onClick={() => storage("modlara bak")}>Local Storage : {lsData} </h3>

      {/* <Charts coinData={coinData} /> */}

    </div>
  );
};

export default App;
