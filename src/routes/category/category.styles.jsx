import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 50px;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;
