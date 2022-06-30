import React from 'react';
import RoutesApp from './routes';
import { generateCondos } from './services/Condominium';
import GlobalStyle from './styles/global';

function App() {
  generateCondos();
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
    </>
  );
}

export default App;
