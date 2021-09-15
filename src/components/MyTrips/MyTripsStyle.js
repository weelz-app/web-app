import styled from "styled-components";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import {Link} from "react-router-dom";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
`;

export const Title = styled.h4`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.17;
    color: #180e3d;
    margin: 0;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;

    &:hover {
        color: #000;
        opacity: 0.7;
    }
`;

export const ArrowIcon = styled(ArrowRightAltIcon)`
    &.MuiSvgIcon-root {
        font-size: 2rem;
    }

    .App.ar &.MuiSvgIcon-root {
        transform: rotate(180deg);
    }
`;

export const Content = styled.div`
    padding: 14px 15.4px 14.4px 15px;
    border-radius: 5px;
    box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
`;
