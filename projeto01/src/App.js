import React from 'react';
import Header from './components/Herder';
import Footer from './components/Footer';
import './App.css';
import Routes from './Routes';
import {BrowserRouter } from 'react-router-dom';

//criando um compomente - Componentes são funções ou classes
function App(){
  return(  // () Serve para criar um bloco de retorno, pq se não poderia retorna a unica coisa
    
      <BrowserRouter>
        <Header />

          <Routes />
      
        <Footer />
        </BrowserRouter>

     
  );
}

export default App;