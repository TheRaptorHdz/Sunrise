import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface CoinData {
 id: string;
 name: string;
 symbol: string;
 rank: number;
 current_price: number;
 volumeUsd24Hr: string;
 marketCapUsd: string;
 availableSupply: number;
 totalSupply: number;
 maxSupply: number;
 percentChange1Hr: string;
 percentChange24Hr: string;
 percentChange7D: string;
 lastUpdated: string;
}

function Main() {
 const [coins, setCoins] = useState<CoinData[]>([]);
 const [info, setInfo]=useState<any>();
 const navigate = useNavigate();

 useEffect(() => {
    axios.get<CoinData[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => {
        setCoins(response.data);
      });
 }, []);

 const irACripto = (coin: CoinData) => {
  const coinJSON = JSON.stringify(coin);


  setInfo(JSON.stringify(coin))

 };
 
 

 return (
    <div>
      <center>
      <ul>
               {coins.filter(coin => ['usdc', 'tether', 'vara'].some(item => item === coin.symbol.toLowerCase()
         || item === coin.name.toLowerCase())).map(coin =>  (
          <li key={coin.id} style={{borderTop: '1px solid #000', borderBottom: '1px solid #000' }}>
            <p>Nombre: {coin.name}</p>
            <p>Símbolo: {coin.symbol}</p>
            <p>Precio USD: {coin.current_price}</p>
            <button type="button" onClick={() => irACripto(coin)}>Ir a cripto</button>
            </li>
        ))}
        
      </ul>
      {info}
      </center>
    </div>
 );
}

export { Main };

