import styled from "styled-components";
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const MainWrapper = styled.div`
    padding: 135px 0 50.1px 0;
    position: relative;
    z-index: 1;

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

export const Title = styled.h2`
    margin-bottom: 7px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.25;
    color: #000;
`;

export const Text = styled.p`
    margin-bottom: 17.6px;
    font-family: Montserrat;
    font-size: 12px;
    line-height: 1.36;
    color: #828282;
    width: 260.5px;
    display: inline-block;
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

export const Input = styled.input`
    height: 40px;
    width: 100%;
    padding: 10px 8px;
    border-radius: 2.5px;
    background-color: #f1f1f1;
    border: none;
    outline: 0;
`;

export const PhoneWrapper = styled.div`
    margin-right: 7.5px;
    height: 40px;
    padding: 2px 12px;
    border-radius: 2.5px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;

    .App.ar & {
        margin-right: 0;
        margin-left: 7.5px;
    }
`;

export const PhoneIcon = styled.img`
    width: 16.5px;
    height: 16.5px;
    margin: 0 2.5px 0 0;
    object-fit: contain;
`;

export const PhoneText = styled.span`
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.18;
    letter-spacing: -0.26px;
    color: #bfbfbf;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
    .App.ar &.MuiFormControlLabel-root {
        margin-right: 0;
    }
`;
