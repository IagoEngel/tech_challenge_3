import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const SpanTitle = styled.span`
    margin-bottom: 8px;
`;

const InputTitle = styled.input`
    user-select: auto;
    margin-bottom: 24px;
    height: 40px;
    padding: 0 16px;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    color: #272b30;
    font-size: 14px;
    transition: all 180ms linear;
`;

export const LabeledTextField = ({ value, onChange }) => {
    return (
        <Column>
            <SpanTitle>Titulo</SpanTitle>
            <InputTitle value={value} onChange={(e) => onChange(e)} />
        </Column>
    );
}