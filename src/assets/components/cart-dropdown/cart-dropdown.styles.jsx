import styled from "styled-components";
import {
  GoogleSignInStyles,
  InvertedButtonStyles,
  buttonStyles,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  color: black;

  ${buttonStyles},
  ${GoogleSignInStyles},
  ${InvertedButtonStyles} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;

  &&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &&::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &&::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #55555500;
  }
`;
