import { createContext, useContext, useState } from "react";

export const ProfessorContext = createContext({});
export const ProfessorProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [professor, setProfessor] = useState(null);

    const login = async (email, password) => {
        const response = await fetch('https://tech-challenge-2-latest.onrender.com/professores/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                'Email': email, 'Password': password
            }),
        });

        const json = await response.json();

        if (json) {
            if (json['statusCode'] === 404) {
                return json;
            }

            setToken(json['token']);
            setProfessor(json['professor']);
        }
    }

    return (
        <ProfessorContext.Provider value={{
            token,
            professor,
            login
        }}>
            {children}
        </ProfessorContext.Provider>
    );
}

export const useProfessorContext = () => {
    return useContext(ProfessorContext);
};