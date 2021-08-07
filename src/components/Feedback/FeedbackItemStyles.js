import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Paper = styled(Container)`
    background-color: #FFFFFF;
`;
export const Title = styled.h3`
    font-family: Montserrat-SemiBold;
    font-size: 11px;
    line-height: 13.5px;
    text-align: left;
    color: #000000;
`;

export const SubTitle = styled.h4`
    font-family: Montserrat-Medium;
    font-size: 10px;
    line-height: 10px;
    text-align: left;
    color: #bfbfbf;
`;

export const Comment = styled.textarea`
    background-color: #f6f6f6;
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
    font-family: Montserrat-Regular;
    font-size: 10px;
    line-height: 10px;
    text-align: left;
`;

export const StarRating = styled.div`
    display: flex;
    align-items: flex-end;
`
