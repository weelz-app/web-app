import styled from "styled-components";

export const BtnWrapper = styled.button`
    height: 35px;
    padding: 11px 74.5px 10.5px 73.5px;
    border-radius: 4px;
    box-shadow: 0 1.5px 7.5px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(95deg, #00c3e1 12%, #00c0dd 72%);
    text-align: center;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.26px;
    color: #fff;
    text-transform: uppercase;
    border: 0;
    outline: 0;

    &:disabled {
        background-image: unset;
        background-color: #bfbfbf;
    }

    &:not(&:disabled):hover {
        opacity: 0.7;
    }

    &.btn--block {
        display: block;
        width: 100%;
    }

    @media only screen and (max-width: 375px) {
        & {
            padding: 11px 50.5px 10.5px 50.5px;
        }
    }
`;