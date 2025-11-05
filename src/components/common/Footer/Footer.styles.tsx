import styled from 'styled-components';

export const MainContainer  = styled.div`
    background-color: black;
    padding: 10px 0px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 5%;
    cursor: pointer;
`;

export const TabName = styled.div`
    font-size: 14px;
    color: #ccc;
    font-weight: 500;
`