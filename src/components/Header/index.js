import styled from "styled-components";
import { LoginButton } from "../LoginButton";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    padding: 12px 15%;
    background-color: #fff;
    box-shadow: rgba(21, 24, 26, 0.1) 0px 1px 5px 0px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Row>
                <b>BloggingApp</b>
                <Link to="/">
                    <p style={{fontSize: '14px'}}>Postagens</p>
                </Link>
            </Row>
            <LoginButton />
        </StyledHeader>
    )
}

export default Header