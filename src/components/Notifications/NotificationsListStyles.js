import styled from "styled-components";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import {Link} from "react-router-dom";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
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
`;

export const Content = styled.div`
    padding: 15px 15px 21.5px;
    border-radius: 5px;
    box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
    height: ${({height}) => height};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
