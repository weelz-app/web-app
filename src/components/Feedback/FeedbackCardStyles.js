import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Button = styled.button`
    width: 150px;
    height: 30px;
    margin-top: 10px;
    border: none;
    box-shadow: 0 1.5px 7.5px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(96deg, #00c3e1 13%, #00c0dd 72%);
    color: white;
    border-radius: 4px;
`;

export const Comment = styled.textarea`
    background-color: #f6f6f6;
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
    font-family: Montserrat-Regular;
    font-size: 12px;
    width: 100%;
    min-height: 98.3px;
    margin: 10.1px 0 0 0;
    padding: 10px;
    border-radius: 2.5px;
`;