import React from 'react';
import Header from './components/Herder';
import Footer from './components/Footer';
import './App.css';

//criando um compomente - Componentes são funções ou classes
function App(){
  return(  // () Serve para criar um bloco de retorno, pq se não poderia retorna a unica coisa
    <>
      <Header />

     <div>Paginas</div> 
      
      <Footer />
     </>
  );
}

export default App;