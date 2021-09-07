import styled from "styled-components";
import StarIcon from '@material-ui/icons/Star';

export const MainWrapper = styled.div`
    margin-right: 10.9px;
    padding: 13px 9px;
    background-color: #eefafc;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
        background-color: #e5edef;
    }
`;

export const Type = styled.div`
    margin-bottom: 4.1px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.22;
    color: #180e3d;
`;

export const CityWrapper = styled.div`
    margin-bottom: 13.4px;
    margin-left: 7.2px;
`;

export const CityLabel = styled.div`
    margin-bottom: 1.8px;
    font-family: Montserrat;
    font-size: 8px;
    font-weight: 500;
    line-height: 1;
    color: #00c3e1;
`;

export const CityName = styled.div`
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    color: #003138;
`;

export const Item = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;

    &.item-center {
        align-items: center;
    }
`;

export const Icon = styled.img`
    margin-right: 5.3px;
    width: 13.2px;
    height: 13.2px;
    object-fit: contain;
`;

export const StyledDate = styled.h4`
    font-family: Montserrat;
    font-size: 9px;
    line-height: 1.33;
    color: #000;
    margin: 0;
`;

export const Time = styled.span`
    display: block;
`;

export const DriversMainRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DriversName = styled.h4`
    font-family: Montserrat;
    font-size: 9px;
    font-weight: 500;
    line-height: 1;
    color: #000;
    margin: 0;
    margin-right: 10px;
`;

export const StarsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledStarIcon = styled(StarIcon)`
    margin-right: 1.6px;
    color: #ffc713;

    &.MuiSvgIcon-root {
        width: 12px;
        height: 12px;
    }
`;

export const Rating = styled.span`
    font-family: Montserrat;
    font-size: 8px;
    font-weight: 500;
    line-height: 1.38;
    color: #000;
`;

export const Car = styled.p`
    margin: 1.3px 0 0 0;
    font-family: Montserrat;
    font-size: 8px;
    line-height: 1.13;
    color: #a5a5a5;
`;

export const Price = styled.div`
    font-family: Montserrat;
    font-size: 9px;
    font-weight: bold;
    line-height: 1;
    color: #000;
`;

export const Status = styled.div`
    font-family: Montserrat;
    font-size: 9px;
    font-weight: 600;
    line-height: 0.94;
    color: #30b50f;
`;
