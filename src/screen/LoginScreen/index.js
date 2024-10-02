import { useState } from "react";
import styled from "styled-components";
import { useProfessorContext } from "../../context/ProfessorContext";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
    background-color: #1f4788;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    background-color: #fff;
    border-radius: 4px;
    min-width: 435px;
    padding: 48px;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    user-select: auto;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    padding: 0;
    transition: all 100ms ease-in-out;
    height: 40px;
    color: #272b30;
    font-size: 14px;
    outline: none;
    :focus{
        border-bottom: 1px solid #1f4788;
        outline: none;
    };
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

const Button = styled.button`
    display: inline-flex;
    vertical-align: middle;
    white-space: nowrap;
    background-color: #1f4788;
    border: 1px solid #1f4788;
    color: #fff;
    border-radius: 4px;
    font-weight: 600;
    height: 40px;
    margin: 0;
    margin-top: 20px;
    padding: 0 16px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const ErrorText = styled.p`
    color: red;
    margin: 0;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
`;

export const LoginScreen = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { login } = useProfessorContext();

    return (
        <Main>
            <Card>
                <h2>BloggingApp</h2>
                <Row>
                    <h4 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                        Email:
                    </h4>
                    <Input value={email} onChange={(value) => setEmail(value.target.value)} />
                </Row>
                <Row>
                    <h4 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                        Senha:
                    </h4>
                    <Input type="password" value={senha} onChange={(value) => setSenha(value.target.value)} />
                </Row>
                {errorMessage !== '' && 
                    <ErrorText>{errorMessage}</ErrorText>
                }
                <Button onClick={async () => {
                    const response = await login(email, senha);

                    if (response?.statusCode === 404) {
                        setErrorMessage('Email ou senha incorretos.');
                        return;
                    }
                    
                    navigate('/');
                }}>
                    Login
                </Button>
            </Card>
        </Main>
    );
};