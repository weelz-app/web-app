import styled from "styled-components";
import Modal from '@material-ui/core/Modal';

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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 29px 62px;
    outline: 0;

    @media only screen and (max-width: 375px) {
        width: 300px;
        padding: 29px 39px;
    }
`;

export const Header = styled.div`
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
`;

export const Title = styled.h4`
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.54;
    letter-spacing: -0.42px;
    color: #000;
`;
