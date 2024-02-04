  import React, { useState, useEffect } from 'react';
  import axios from 'axios';

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

  function Home() {
  const [coins, setCoins] = useState<CoinData[]>([]);

  useEffect(() => {
      axios.get<CoinData[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => {
          setCoins(response.data);
        });
  }, []);

  return (
      <div><center>
        <h1>Página de inicio</h1><br />
        <h2>Cripto monedas listadas:</h2><br />
        </center>
        <ul>
        {coins.filter(coin => ['usdc', 'tether', 'vara'].some(item => item === coin.symbol.toLowerCase()
         || item === coin.name.toLowerCase())).map(coin => (<center>
  <li key={coin.id} style={{borderTop: '1px solid #000', borderBottom: '1px solid #000' }}>
      <p>Nombre: {coin.name}</p>
      <p>Símbolo: {coin.symbol}</p>
      <p>Precio USD: {coin.current_price}</p>
  </li>
  </center>
  ))}



        </ul>
      </div>
  );
  }

  export { Home };

