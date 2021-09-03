import styled from "styled-components";
import Modal from '@material-ui/core/Modal';
import {Link} from 'react-router-dom'

export const ModalWrapper = styled(Modal)`
    width: 100%;
    height: 100vh;
    background-color: #0006;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10040 !important;
    overflow-y: scroll;
    padding-top: 80px;
    padding-bottom: 20px;
`;

export const StyledModal = styled.div`
    width: 365px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 29px 62px;
    outline: 0;

    @media only screen and (max-width: 375px) {
        width: 300px;
        padding: 29px 39px;
    }
`;

export const Image = styled.img`
    width: 187.5px;
    height: 150px;
    object-fit: contain;
`;

export const Title = styled.h4`
    margin: 18.5px 0 26.5px 0;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.54;
    letter-spacing: -0.42px;
    text-align: center;
    color: #000;
`;

export const Heighlight = styled.span`
    color: #00c3e1;
`;

export const StyledLink = styled(Link)`
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.09;
    letter-spacing: -0.35px;
    text-align: center;
    color: #2f1b7a;
    text-decoration: none;
`;
