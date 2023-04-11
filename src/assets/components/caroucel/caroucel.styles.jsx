import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 200px;
  color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const ContainerCarousel = styled.div`
  max-width: 75vw;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  margin: 5px;
  padding: 10px;
  width: 210px;
  flex: none;
  background: rgba(255, 255, 255, 0.1);
`;

export const Image = styled.div`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.span`
  display: block;
  text-align: center;
  color: #1e1e1e;
  padding: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
`;
export const Buttons = styled.div`
  width: 100%;
  text-align: center;
  color: #748697;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  :first-child img {
    transform: rotate(180deg);
  }
`;
