import React from 'react';
import {AreaHeader} from './styled'
// Componente
function Header(){
return( 
        <AreaHeader>
            <div className = "conteiner">
                <div className = "logo">
                <img src="../../../logo.jpg"></img>
                </div>
                <nav>
                    <ul>
                        <li>Configurações</li>
                        <li>Sair</li>
                    </ul>
                </nav>
            </div> 
        </AreaHeader>
    );
}

export default Header;