import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Main } from './main';
import { Info } from './info';
import { Nft } from './nft';
import { Cripto } from './cripto';

const routes = [{ path: '/', Page: Home },{ path: '/main', Page: Main },
{ path: '/info', Page: Info },{ path: '/nft', Page: Nft },{ path: '/cripto', Page: Cripto }];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
  