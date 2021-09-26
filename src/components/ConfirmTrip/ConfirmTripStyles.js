import styled from "styled-components";
import Modal from '@material-ui/core/Modal';

export const ModalWrapper = styled(Modal)`
    width: 100%;
    height: 100% !important;
    background-color: #0006;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10040 !important;
    overflow-y: auto;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    .MuiBackdrop-root{
        display: none !important;
    }
    @media only screen and (max-width: 575px) {
        & .MuiBackdrop-root {
            background-color: #fff;
        }
    }
`;

export const StyledModal = styled.div`
    width: 375px;
    border-radius: 5px;
    background-color: #00C3E1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    top: auto !important;
    bottom: auto !important;
    left: auto !important;
    padding: 0 !important;
    margin: 0 !important;
    outline: 0 !important;
    @media only screen and (max-width: 575px) {
        width: 100%;
    }
    &.ar {
        direction: rtl;
    }
    .content-dt{
        width: 100%;
        background: #fff;
        border-radius: 25px 25px 0 0;
        padding: 15px !important;
    }
`;

export const TitleWrapper = styled.div`
    width: 100%;
    padding: 0 !important;
    border-bottom: 1px solid rgb(124 124 125 / 12%);
    margin: 0 !important;
`;

export const Title = styled.h3`
    font-size: 22px;
    width: 100%;
    margin: 0 ;
    padding: 20px 15px !important;
    color: #fff !important;
    @media only screen and (max-width: 575px) {
        font-size: 25px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const HeaderText = styled.h5`
    color: #322B77;
    font-size: 18px;
`;

export const Type = styled.div`
    padding: 11px 36px;
    position: relative;
    display: flex;
    align-items: center;
`;

export const TypeOverlay = styled.div`
    background-color: #00C3E1;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.15;
`;

export const TypeIcon = styled.img`
    width: 19.56px;
    height: 18.37px;
    margin: 0 5px 0 0;
    object-fit: contain;

    .confirm-trip.ar & {
        margin: 0 0 0 5px;
    }
`;

export const TypeText = styled.span`
    font-size: 16px;
    letter-spacing: 0.35;
    color: #00C3E1;
`;

export const CitiesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    width: 100%;
    border-bottom: 1px solid rgb(124 124 125 / 12%);
`;

export const LineIcon = styled.img`
    width: 53px;
    object-fit: contain;
`;

export const CityWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 22px;

    .confirm-trip.ar & {
        padding-right: 0;
        padding-left: 22px;
    }
`;

export const Icon = styled.img`
    margin-right: 10px;
    width: 24px;
    height: 24px;
    object-fit: contain;

    .confirm-trip.ar & {
        margin-right: 0;
        margin-left: 10px;
    }
`;

export const CityLabel = styled.label`
    color: #7C7C7D;
    font-size: 16px;
    letter-spacing: 0.35;
`;

export const CityName = styled.h5`
    color: #00C3E1;
    font-size: 16px;
    letter-spacing: 0.35;
`;

export const DetailsWrapper = styled.div`
    padding: 19px 0;
    width: 100%;
    border-bottom: 1px solid rgb(124 124 125 / 12%);
`;

export const DeatilsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-of-type {
        margin-bottom: 18px;
    }
`;

export const DetailsItem = styled.div`
    display: flex;
    align-items: center;
    width: 155px;
    margin-right: 50px;

    .confirm-trip.ar & {
        margin-right: 0;
        margin-left: 50px;
    }

    &:nth-of-type(2),
    .confirm-trip.ar &:nth-of-type(2) {
        margin: 0;
    }

    &:last-of-type,
    .confirm-trip.ar &:last-of-type {
        margin: 0;
    }
`;

export const DetailsLabel = styled.label`
    color: #7C7C7D;
    font-size: 15px;
    letter-spacing: 0.3;
`;

export const DetailsText = styled.h5`
    color: #1C1C1C;
    font-size: 16px;
    letter-spacing: 0.3;
    margin: 0;
`;

export const Price = styled.span`
    color: #28B24B;
`;

export const ChoicesWrapper = styled.div`
    margin: 25px 0;
    width: 100%;
`;

export const ChoicesTitle = styled.h4`
    color: #322B77;
    font-size: 18px;
    letter-spacing: 0.4;
    margin: 0 0 12px 0;
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
`;

export const Tag = styled.div`
    padding: 3px 10px;
    position: relative;
    margin-right: 25px;
    display: flex;
    align-items: center;

    .confirm-trip.ar & {
        margin-right: 0;
        margin-left: 25px;
    }

    &:last-of-type,
    .confirm-trip.ar & {
        margin: 0;
    }
`;

export const TagOverlay = styled.div`
    background-color: #00C3E1;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.07;
`;

export const TagIcon = styled.img`
    margin-right: 10px;
    width: 20px;
    height: 20px;
    object-fit: contain;

    .confirm-trip.ar & {
        margin-right: 0;
        margin-left: 10px;
    }
`;
