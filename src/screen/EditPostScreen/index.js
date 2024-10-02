import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usePostContext } from "../../context/PostContext";
import { useProfessorContext } from "../../context/ProfessorContext";
import { useState } from "react";
import { LabeledTextField } from "../../components/LabeledTextField";
import { LabeledMultilineTextField } from "../../components/LabeledMultilineTextField";

const Main = styled.div`
    background-color: rgb(243, 246, 248);
    height: 100vh;
    padding: 40px;
    max-width: 1280px;
`;

const H1Title = styled.h1`
    margin: 0;
    margin-bottom: 32px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Card = styled.div`
    width: 100%;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 24px;
`;

const Spacer = styled.div`
    width: 100%;
`;

const VoltarButton = styled.button`
    align-items: center;
    background-color: #fff;
    border: 1px solid #1f4788;
    border-radius: 4px;
    color: #1f4788;
    cursor: pointer;
    display: inline-flex;
    font-weight: 600;
    height: 40px;
    justify-content: center;
    margin: 0;
    padding: 0 16px;
`;

const SalvarButton = styled.button`
    background-color: #1f4788;
    border: 1px solid #1f4788;
    color: #fff;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    font-weight: 600;
    height: 40px;
    justify-content: center;
    margin: 0;
    padding: 0 16px;
    transition: all 100ms linear;
`;

export const EditPostScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { putPost } = usePostContext();
    const { token } = useProfessorContext();

    const [titulo, setTitulo] = useState(location.state.post.Titulo);
    const [conteudo, setConteudo] = useState(location.state.post.Conteudo);

    return (
        <Main>
            <H1Title>Modificar Postagem</H1Title>
            <Row>
                <Card>
                    <LabeledTextField value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    <LabeledMultilineTextField value={conteudo} onChange={(e) => setConteudo(e.target.value)} />
                    <Row style={{ gap: '24px' }}>
                        <VoltarButton onClick={() => {
                            navigate('/');
                        }}>
                            Voltar
                        </VoltarButton>
                        <SalvarButton onClick={async () => {
                            const post = {
                                'Titulo': titulo,
                                'Conteudo': conteudo,
                                'ProfessorId': location.state.post.ProfessorId._id
                            };

                            await putPost(location.state.post._id, token, post);

                            navigate('/');
                        }}>
                            Salvar
                        </SalvarButton>
                    </Row>
                </Card>
                <Spacer style={{ marginLeft: '16px' }} />
            </Row>
        </Main>
    );
};