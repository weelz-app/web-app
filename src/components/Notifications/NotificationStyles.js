import styled from "styled-components";

export const MainWrapper = styled.div`
    margin-bottom: 7px;
    padding: 5.5px 15px 5.5px 5px;
    border-radius: 5px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        background-color: #f3f1f1;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    width: 22px;
    height: 29px;
    margin-right: 7px;
    object-fit: contain;
`;

export const Title = styled.h4`
    margin: 0 0 1.5px 0;
    font-family: Montserrat;
    font-size: 9px;
    font-weight: 600;
    line-height: 1.17;
    color: #000;
`;

export const Text = styled.p`
    margin: 0;
    font-family: Montserrat;
    font-size: 7.5px;
    line-height: 0.87;
    color: #939393;
`;
