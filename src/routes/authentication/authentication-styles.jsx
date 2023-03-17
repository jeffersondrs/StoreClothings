import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

export const AuthenticationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AttributeParagrath = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
