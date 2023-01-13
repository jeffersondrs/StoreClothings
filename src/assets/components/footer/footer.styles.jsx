import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
    background-color: #1e1e1e;
    color: white;
    padding-top: 5%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ListaFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-right: 1px solid white;
    &:last-child {
        border-right: none;
    }
    h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 10px;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            margin-bottom: 5px;
            a {
                color: white;
                text-decoration: none;
                &:hover {
                    color: #f5a623;
                }
            }
        }
    }
`;

export const CopyRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 0.8rem;
    color: #f5a623;
    margin: 20px;
`;