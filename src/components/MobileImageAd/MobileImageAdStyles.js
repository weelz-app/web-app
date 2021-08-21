import styled from "styled-components";

export const MainWrapper = styled.div`
    position: absolute;
    height: 100vh;
    overflow: hidden;
    width: 55%;
    right: 0;
    top: 0;

    @media only screen and (max-width: 767px) {
        width: 44%;
    }
    
    @media only screen and (max-width: 576px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Content = styled.div`
    position: absolute;
    bottom: 80px;
    left: 30px;

    @media only screen and (max-width: 640px) {
        left: 14px;
    }

    @media only screen and (max-width: 576px) {
        display: none;
    }
`;

export const Title = styled.h3`
    width: 218px;
    margin: 0 0 11.5px 0px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 600;
    line-height: 1.2;
    color: #fff;
`;

export const IconBtn = styled.img`
    width: 114.5px;
    height: 33.9px;
    margin: 0 7.5px 0 0;
    object-fit: contain;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    @media only screen and (max-width: 586px) {
        &:first-of-type {
            margin-bottom: 10px;
        }
    }
`;