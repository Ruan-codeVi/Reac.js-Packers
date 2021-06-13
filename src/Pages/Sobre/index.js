import {Link} from 'react-router-dom';

export default function Sobre(){
    return(
      <div>
        <h1>Sobre o curso React Js...</h1>
        <Link to='/'>Sobre:</Link> <br/>
        <Link to='/contato'>Contato:</Link>
       
      </div>
    )
  }
  