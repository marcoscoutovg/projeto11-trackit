import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    align-items: center;

    >a {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        padding: 15px;
        text-decoration: none;
    }
`

export const ButtonToday = styled.div`
    width: 91px;
    height: 91px;
    background: #52B6FF;
    margin-bottom: 45px;
    border-radius: 56px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #FFFFFF

`