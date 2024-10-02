import styled from "styled-components";
import { usePostContext } from "../../context/PostContext";
import { useProfessorContext } from "../../context/ProfessorContext";
import { useNavigate } from "react-router-dom";

const PostItem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-bottom: 12px;
    background-color: #fff;
    padding: 24px;
`;

const PostTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
`;

const PostContent = styled.span`
    margin: 0px 0px 8px;
    height: 40px;
    font-size: 14px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 18px;
`;

const NomeProfessor = styled.span`
    font-size: 14px;
    font-weight: 700;
`;

const PostDate = styled.span`
    font-size: 14px;
`;

const formatDate = (date) => {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    let time = date.substring(11, 16);


    return `${day}/${month}/${year} ${time}`;
}

const EditarButton = styled.button`
    border: 1px solid transparent;
    color: #fff;
    background-color: #f59f00;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    height: 40px;
    justify-content: center;
    margin: 0;
    padding: 0 16px;
    font-weight: 600;
`;

const ExcluirButton = styled.button`
    border: 1px solid transparent;
    color: #fff;
    background-color: #c92a2a;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    height: 40px;
    justify-content: center;
    margin: 0;
    padding: 0 16px;
    font-weight: 600;
`;

export const PostsList = () => {
    const navigate = useNavigate();

    const { posts, deletePost } = usePostContext();
    const { professor, token } = useProfessorContext();

    return (
        <>
            {posts?.length > 0 && posts.map((p) => {
                return (
                    <PostItem key={p['_id']}>
                        <PostTitle>{p.Titulo}</PostTitle>
                        <PostContent>{p.Conteudo}</PostContent>
                        <Row>
                            <NomeProfessor>{p.ProfessorId?.Nome}</NomeProfessor>
                            <PostDate>{formatDate(p?.UpdatedAt)}</PostDate>
                        </Row>
                        {professor &&
                            <Row style={{ justifyContent: 'start', marginTop: '16px' }}>
                                <EditarButton
                                    onClick={() => {
                                        navigate('/edit', { state: { post: p } })
                                    }}
                                >
                                    Editar
                                </EditarButton>
                                <ExcluirButton
                                    onClick={async () => {
                                        await deletePost(p['_id'], token);
                                    }}
                                >
                                    Excluir
                                </ExcluirButton>
                            </Row>
                        }
                    </PostItem>
                );
            })}
        </>
    );
};