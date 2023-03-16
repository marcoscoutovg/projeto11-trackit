import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoLogin from "../../components/InfoLogin/InfoLogin";
import Logo from "../../components/Logo/Logo";


function LoginPage({ setToken }) {

    return (
        <LoginContainer>
            <Logo />
            <InfoLogin setToken={setToken} />

            <Link
                data-test="signup-link"
                to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Link>
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >a {
        width: 262px;
        height: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`

export default LoginPage;