import { Login, Logout, Person } from "@mui/icons-material";
import styled from "styled-components";
import { useProfessorContext } from "../../context/ProfessorContext";
import { Link } from "react-router-dom";

const Button = styled.button`
    color: #1f4788;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const LoginButton = () => {
    const { professor } = useProfessorContext();

    return (
        <>
            {!professor 
                ? <Link to="/login">
                    <Button>
                        Login
                        <Login fontSize="small" sx={{ color: "#1f4788" }} />
                    </Button>
                </Link> 
                : <Link to="/login">
                    {console.log('professor: ', professor)}
                    <Button>
                        <Person fontSize="small" sx={{ color: "#1f4788" }} />
                        {professor.Nome}
                        <Logout fontSize="small" sx={{ color: "#1f4788" }} />
                    </Button>
                </Link>
            }
        </>
    );
};