import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavegationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background-color: #1e1e1e;
  color: white;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;

  :hover {
    cursor: pointer;
    animation: bounce 2s infinite linear;
  }

  @keyframes bounce {
    0% {
      trasnform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LinkContainer = styled(Link)`
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  background: linear-gradient(
    90deg,
    rgba(135, 206, 235, 1) 0%,
    rgba(35, 156, 235, 1) 100%
  );
  border: none;
  border-radius: 1rem;
  color: white;
  width: 250px;
  margin: 0 0.5rem;
  text-align: center;
  transition: all 1s ease-in-out;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(35, 156, 235, 1) 0%,
      rgba(135, 206, 235, 1) 100%
    );
  }
`;

export const MenuLinksContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 5px;
    top: 0px;
    right: 0px;
    z-index: 5;
    color: white;
  }
`;
