import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const MainWrapper = styled.div`
    margin-bottom:  ${({variant}) => variant === "notifications-page" ? "10px" : "7px"};
    padding: ${({variant}) => variant === "notifications-page" ? "6.5px 17px 6.5px 6px" : "5.5px 15px 5.5px 5px"};
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

    @media only screen and (max-width: 360px) {
        padding: 6.5px 6px 6.5px 6px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    width: ${({variant}) => variant === "notifications-page" ? "26px" : "22px"};
    height: ${({variant}) => variant === "notifications-page" ? "34px" : "29px"};
    margin-right: ${({variant}) => variant === "notifications-page" ? "9px" : "7px"};
    object-fit: contain;

    .App.ar & {
        margin-left: ${({variant}) => variant === "notifications-page" ? "9px" : "7px"};
        margin-right: 0;
    }
`;

export const Title = styled.h4`
    margin: 0 0 ${({marginBottom}) => marginBottom} 0;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.17;
    color: #000;
`;

export const Text = styled.p`
    margin: 0;
    font-family: Montserrat;
    font-size: 9px;
    line-height: 0.87;
    color: #939393;
`;

export const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
    .App.ar &.MuiSvgIcon-root {
        transform: rotate(180deg);
    }
`;
