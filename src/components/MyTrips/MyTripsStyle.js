import styled from "styled-components";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Title = styled.h4`
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.17;
    color: #000;
    margin: 0;
`;

export const ArrowIcon = styled(ArrowRightAltIcon)`
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

export const Content = styled.div`
    padding: 14.5px 15.4px 15.8px 15px;
    border-radius: 5px;
    box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
`;
