import React from 'react';
import RoutesApp from './routes';
import { generateCondos } from './services/Condominium';
import { generateTransactions } from './services/Transactions';
import GlobalStyle from './styles/global';

function App() {
  generateCondos();
  generateTransactions();
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
    </>
  );
}

export default App;
