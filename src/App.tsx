import React from 'react';
import RoutesApp from './routes';
import { genegateCondos } from './services/Condominium';
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
