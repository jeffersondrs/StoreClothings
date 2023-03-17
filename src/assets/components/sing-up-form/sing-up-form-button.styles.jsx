import styled from "styled-components";

export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 768px) {
        width: 80%;
        height: 100%;
    }
`;
