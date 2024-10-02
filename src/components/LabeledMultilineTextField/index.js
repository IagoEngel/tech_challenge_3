import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const SpanContent = styled.span`
    margin-bottom: 8px;
`;

const InputContent = styled.textarea`
    user-select: auto;
    margin-bottom: 24px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    color: #272b30;
    font-size: 14px;
    transition: all 180ms linear;
    resize: auto;
    height: auto;
`;

export const LabeledMultilineTextField = ({ value, onChange }) => {
    return (
        <Column>
            <SpanContent>Conteúdo</SpanContent>
            <InputContent rows={3} maxLength={100} value={value} onChange={(e) => onChange(e)} />
        </Column>
    );
};