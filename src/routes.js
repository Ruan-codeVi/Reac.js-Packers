import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';

// Criando componente com funcção anomina

const Routes = ()=>{
    return(
        
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path='/Sobre' component={Sobre}/>
        <Route path='/Contato' component={Contato}/>
        </Switch>
    </BrowserRouter>
        
    )
}
// Na taga Route o path é caminho que esta sendo indicado por barra /

export default Routes;