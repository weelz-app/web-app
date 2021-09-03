import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';

export const Paper = styled(Container)`
    background-color: #FFFFFF;
    padding: 0;
    margin-bottom: 22px;

    &.overall {
        margin-bottom: 0;
    }
`;
export const Title = styled.h3`
    font-family: Montserrat-SemiBold;
    font-size: 13px;
    font-weight: 600;
    line-height: 13.5px;
    text-align: left;
    color: #000000;
    margin: 0;
`;

export const SubTitle = styled.h4`
    font-family: Montserrat-Medium;
    font-size: 12px;
    font-weight: 500;
    line-height: 10px;
    text-align: left;
    color: #bfbfbf;
`;

export const StarRating = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const StyledRating = styled(Rating)`
    .star {
        margin-right: 5px;
    }
`;

export const FeedbackWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
