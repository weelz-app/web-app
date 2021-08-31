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

    @media only screen and (max-width: 575px) {
        & .MuiBackdrop-root {
            background-color: #fff;
        }
    }
`;

export const StyledModal = styled.div`
    width: 375px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 25px 18px 33px 18px;
    margin-top: 40px;
    outline: 0;

    @media only screen and (max-width: 575px) {
        width: 100%;
    }
`;

export const TitleWrapper = styled.div`
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(124 124 125 / 12%);
    margin-bottom: 20px;
`;

export const Title = styled.h3`
    font-size: 22px;
    width: 100%;
    margin: 0;

    @media only screen and (max-width: 575px) {
        width: 200px;
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
`;

export const Icon = styled.img`
    margin-right: 10px;
    width: 24px;
    height: 24px;
    object-fit: contain;
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

    &:nth-of-type(2) {
        margin: 0;
    }

    &:last-of-type {
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

    &:last-of-type {
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
`;
