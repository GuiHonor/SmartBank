import styled from "styled-components";

export const StyleCabecalho = styled.div`
    background-color: #41d3be;
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
    
`

export const BotaoCabecalho = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;
    background: ${(props) => props.Background};
    color: ${(props) => props.Color};
`

export const Logo = styled.img`
    height: 50px;
    width: 50px;
    margin-top: 15px;
`

export const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    
`
