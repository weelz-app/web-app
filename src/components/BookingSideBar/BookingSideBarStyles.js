import styled from "styled-components";

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

export const LinkWrapper = styled.div`
    margin-top: 10px;

    .App.ar & {
        display: flex;
        align-items: center;
        min-height: 24px;
    }
`;

export const Text = styled.span`
    margin: 1px 8px 0 0;
    font-family: Montserrat;
    font-size: 10px;
    line-height: 0.89;
    color: #000;

    .App.ar & {
        margin: 1px 0 0 8px;
    }
`;

export const Link = styled.a`
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 600;
    line-height: 0.8;
    color: #2f1b7a;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px dashed #000;

    &:hover {
        border-color: #0a58ca;
    }
`;