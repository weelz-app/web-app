import styled from "styled-components";
import MobileImage from "../../icons/avatar-trip.png";

export const MainWrapper = styled.div`
    width: 100%;
    padding: 23.5px 32.5px 34px 20px;
    position: relative;
    margin-top: 42px;
    height: calc(100% - 39px);
    display: flex;
    align-items: center;

    &.mobile-image {
        padding: 20px 37.5px 20px 15px;
        margin-top: 0;
        height: 100%;
        background-image: url(${MobileImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        align-items: flex-start;
    }
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
    font-size: 20px;
    font-weight: bold;
    line-height: 1.33;
    color: #000;
`;

export const Text = styled.span`
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.67;
    color: #797979;
    margin-bottom: 7.6px;
    display: block;
`;

export const Icon = styled.img`
    width: 124.5px;
    margin-bottom: 4px;
    object-fit: contain;
    cursor: pointer;
    display: block;

    &:last-of-type {
        margin-bottom: 0;
    }
`;