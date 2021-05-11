import React from 'react';
import {AreaHeader} from './style'
// Componente
function Header(){
return( 
        <AreaHeader>
            <div className = "conteiner">
                <div className = "logo">
                LogoMarca
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