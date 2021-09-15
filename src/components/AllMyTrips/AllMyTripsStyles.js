import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 20px 19.5px;
    border-radius: 5px;
    box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
`;

export const Tabs = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;

export const Tab = styled.div`
    min-width: 100px;
    height: 25px;
    margin: 0 13px 0 0;
    border-radius: 12.5px;
    background-color: #f7f7f7;
    color: #000;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 600;
    line-height: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.active,
    &:hover {
        background-color: #2f1b7a;
        color: #fff;
    }

    @media only screen and (max-width: 767px) {
        min-width: 80px;
    }

    @media only screen and (max-width: 528px) {
        margin-bottom: 10px;
    }
`;

export const Trips = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;

    @media only screen and (max-width: 991px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 470px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

