import {Link} from 'react-router-dom'
export default function Home(){
    return(
      <div>
        <h1>Bem vindo a página Home</h1>
        <Link to='/sobre'>Sobre:</Link> <br/>
        <Link to='/contato'>Contato:</Link>
      </div>
    );
  }
  // Tag link é tag ancora para levar para outras rotas