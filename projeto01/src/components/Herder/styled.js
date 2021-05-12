import styled from 'styled-components';

export const AreaHeader = styled.div` 
    height: 60px;
    background-color:#791E94;
    color: #fff;

    .conteiner{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }
        .logo{
            flex: 1;

            img{
                width: 55px;
                border-radius: 70%;
            }
        }
            nav{
                ul{
                    display:flex; /* deixando lado a lado */
                }
                li{
                    list-style:none; /* retirando a bolinhas */
                    margin-left: 20px;
                }
            }
`;