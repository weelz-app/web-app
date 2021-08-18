import styled from "styled-components";

export const MainWrapper = styled.div`
    
`;

export const Title = styled.h3`
    margin-bottom: 10px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: bold;
    line-height: 2.31;
    color: #2f1b7a;
`;

export const Item = styled.div`
    margin-bottom: 13.5px;
    box-shadow: 0 2.5px 8px 0 rgb(0 0 0 / 5%);
    background-color: #fff;
    padding: 8px 15px 7.5px 14.4px;
    border-radius: 5px;

    &.date-picker {
        padding: 23.5px 15px 13px 14.4px;
    }
`;

export const Text = styled.span`
    margin: 1px 8px 0 0;
    font-family: Montserrat;
    font-size: 9px;
    line-height: 0.89;
    color: #000;
`;

export const Link = styled.a`
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 600;
    line-height: 0.8;
    color: #2f1b7a;
    cursor: pointer;
`;