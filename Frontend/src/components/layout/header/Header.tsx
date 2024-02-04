import React from 'react';
import { Link } from 'react-router-dom';
import { Account } from './account';
import styles from './Header.module.scss';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
    margin: '0 50px',
    fontWeight: 'bold',
    fontSize: '24px',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <header style={headerStyle}>
      <img src="slogo.png" alt="logos" width="100" height="100" />
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Pagina Principal</Link>
        <Link to="/Info" style={linkStyle}>Información</Link>
        <Link to="/Main" style={linkStyle}>Cryptomonedas</Link>
        <Link to="/nft" style={linkStyle}>NFTs</Link>
      </nav>
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };



