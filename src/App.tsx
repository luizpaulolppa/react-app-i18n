import React from 'react';
import RoutesApp from './routes';
import { genegateCondos } from './services/Utils';
import GlobalStyle from './styles/global';

function App() {
  genegateCondos();
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
    </>
  );
}

export default App;
