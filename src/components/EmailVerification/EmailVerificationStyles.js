import styled from "styled-components";
import VerificationInput from "react-verification-input";

export const MainWrapper = styled.div`
    padding: 135px 50px 50.1px 0;
    position: relative;
    z-index: 1;
    width: 44%;

    @media only screen and (max-width: 991px) {
        width: 57%;
    }

    @media only screen and (max-width: 767px) {
        padding-right: 15px;
    }

    @media only screen and (max-width: 576px) {
        position: relative;
        z-index: 1;
        background-color: #fff;
        padding: 40px 32px;
        top: 80px;
        border-radius: 13pt;
        flex-direction: column;
        display: flex;
        width: 340px;
        margin: 0 auto;
    }

    @media only screen and (max-width: 365px) {
        width: 293px;
    }
`;

export const PhoneWrapper = styled.div`
    width: 100%;
    max-width: 380px;
    margin: 0 0 15px 0;
    padding: 15px 23px 15.5px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    background-image: linear-gradient(138deg, #00c3e1 3%, #584995 106%);
    left: 0;
    top: 0;
    opacity: 0.1;
`;

export const PhoneIcon = styled.img`
    width: 102.5px;
    height: 102.5px;
    margin: 0 15px 0 0;
    object-fit: contain;

    @media only screen and (max-width: 767px) {
        width: 65.5px;
        height: 65.5px;
    }
`;

export const Title = styled.h2`
    margin: 0 0 7px 0;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.18;
    color: #000;
`;

export const Text = styled.p`
    width: 158px;
    font-family: Montserrat;
    font-size: 11px;
    line-height: 1.45;
    color: #828282;
    margin: 0;

    @media only screen and (max-width: 767px) {
        font-size: 10px;
    }

    @media only screen and (max-width: 365px) {
        width: 110px;
    }
`;

export const Number = styled.span`
    font-weight: 500;
    color: #000;
`;

export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 260px;

    @media only screen and (max-width: 576px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8.9px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 0.92;
    color: #000;
`;

export const VerificationInputStyled = styled(VerificationInput)`
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    
    & .vi__character {
        width: 40px;
        border-radius: 2.5px;
        font-size: 14px;
        color: #000;
        background-color: #f1f1f1;
        border: 1px solid transparent;
        margin-left: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 1.5px 7.5px 0 rgba(0, 195, 225, 0.05);
    }
    
    & .vi__character:first-child {
        margin-left: 0;
    }

    .character--selected {
        border: 1px solid #00c3e1;
    }

    @media only screen and (max-width: 576px) {
        height: 48px;

        & .vi__character {
            width: 60px;
            border-radius: 5px;
            margin-left: 12px;
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 365px) {
        height: 38px;

        & .vi__character {
            width: 50px;
        }
    }
`;

export const ResendWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const Resend = styled.a`
    margin: 0 15px 0 0;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.45;
    color: #584995;
    cursor: pointer;
    text-decoration: none;
`;

export const TimeLeft = styled.span`
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 500;
    color: #000;
`;