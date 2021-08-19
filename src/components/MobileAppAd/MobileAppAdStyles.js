import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    padding: 23.5px 32.5px 34px 20px;
    position: relative;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    background-image: linear-gradient(155deg,#00c3e1 -6%,#584995 133%);
    left: 0;
    top: 0;
    opacity: 0.2;
`;

export const Content = styled.div`
    position: relative;
`;

export const Title = styled.h4`
    margin-bottom: 3px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.33;
    color: #000;
`;

export const Text = styled.span`
    font-family: Montserrat;
    font-size: 9px;
    font-weight: 500;
    line-height: 1.67;
    color: #797979;
    margin-bottom: 7.6px;
    display: block;
`;

export const Icon = styled.img`
    width: 114.5px;
    height: 33.9px;
    margin-bottom: 4px;
    object-fit: contain;
    cursor: pointer;

    &:last-of-type {
        margin-bottom: 0;
    }
`;