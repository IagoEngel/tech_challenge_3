import styled from "styled-components";
import { FilterPosts } from "../FilterPosts/FilterPosts";
import { useEffect } from "react";
import { usePostContext } from "../../context/PostContext";
import { PostsList } from "../PostsList/PostsList";
import { useProfessorContext } from "../../context/ProfessorContext";
import { Link } from "react-router-dom";

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 15%;
    gap: 32px;
`;

const H1Title = styled.h1`
    margin: 0;
    font-size: calc(32px) - 2px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CriarPostButton = styled.button`
    border: 1px solid transparent;
    color: #fff;
    background-color: #1f4788;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    height: 40px;
    justify-content: center;
    margin: 0;
    padding: 0 16px;
    font-weight: 600;
`;

export const Body = () => {
    const { getAllPosts } = usePostContext();
    const { professor } = useProfessorContext();

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <MainContent>
            <Row>
                <H1Title>Postagens</H1Title>
                {professor &&
                    <Link to="/create">
                        <CriarPostButton>Criar novo Post</CriarPostButton>
                    </Link>
                }
            </Row>
            <FilterPosts />
            <PostsList />
        </MainContent>
    );
};