import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


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

function Cripto() {
    const { coinJSON } = useParams();
    if (!coinJSON) {
       throw new Error('No coin data provided');
    }
    const coin = JSON.parse(coinJSON) as CoinData;
 return (
    <div>
      <h1>{coin.name}</h1>
      <h1>Símbolo: {coin.symbol}</h1>
      <h1>Precio USD: {coin.current_price}</h1>
      {/* Aquí puedes agregar más detalles de la moneda */}
    </div>
 );
}

export { Cripto };
