import styled from "styled-components";
import { usePostContext } from "../../context/PostContext";
import { useState } from "react";

const Row = styled.div`
    display: flex;
    gap: 30px;
`;

const Input = styled.input`
    margin: 0;
    user-select: auto;
    font-size: 16px;
    height: 48px;
    padding: 0 16px;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    color: #272b30;
    transition: 180ms linear;
`;

const OutlineTextButton = styled.button`
    background-color: rgb(248, 248, 248);
    font-size: 16px;
    height: 48px;
    border: 1px solid #1f4788;
    border-radius: 4px;
    color: #1f4788;
    cursor: pointer;
    filter: brightness(1);
    font-weight: 600;
    line-height: 1;
    margin: 0;
    padding: 0 16px;
    transition: 100ms linear;
`;

export const FilterPosts = () => {
    const { searchPost } = usePostContext();
    const [textValue, setTextValue] = useState('');

    return (
        <Row>
            <Input 
                value={textValue}
                onChange={(text) => {
                    setTextValue(text.target.value);
                }}
            />
            <OutlineTextButton onClick={async () => {
                searchPost(textValue);
            }}>Filtrar</OutlineTextButton>
        </Row>
    );
};