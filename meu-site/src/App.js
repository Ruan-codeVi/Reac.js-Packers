import React, {Component} from 'react';
// import Membro from './components/Membro'
import Feed from './components/Feed';

// LISTAS

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id:1, username:"Matheus", curtidas:10, comentarios: 14},
                {id:2, username:"Lucas", curtidas:120, comentarios: 44},
                {id:3, username:"Joao", curtidas:6, comentarios: 3},
                {id:4, username:"Kleber", curtidas:1, comentarios: 0}
            ]
        }
      
    }

   


    render(){
        return(
            <div >
                {this.state.feed.map((item)=>{
                    return(
                        <Feed key={item.id} username={item.username} //Passando as props para Feed
                        curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );
                })}
               
            </div>
        );
    }
}

    


export default App;