 import React, { Component } from 'react';

 class Membro extends Component{
     constructor(props){
         super(props);
         this.state = {
             nome: props.nome
         }
         this.entrar = this.entrar.bind(this);
         this.sair = this.sair.bind(this)
     }

     entrar(nomeParam){
         this.setState({nome: nomeParam})
     }
     sair(){
        alert(`${this.state.nome} Você deslogou`  )
         this.setState({nome: 'Visintante'})
     }
 render(){
  return (
    <div>
       <h2>Bem vindo(a) {this.state.nome}</h2>
       <button onClick={ () => this.entrar('Eren')}>
       Entrar como usuário Matheus
       </button>
       <button onClick={this.sair}>
       Sair
       </button>
    </div>
  );
 }
}
export default Membro;