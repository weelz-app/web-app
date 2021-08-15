import styled from "styled-components";

export const MainWrapper = styled.section`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

export const Icon = styled.div`
    width: 23.8px;
    height: 15.1px;
    margin-right: 9.2px;
    line-height: 0;
`;

export const Text = styled.span`
    margin: 0.5px 0 0.1px 0;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.21;
    color: #808080;
`;