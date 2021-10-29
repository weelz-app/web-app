import React from 'react';
import {
    MainWrapper,
    CityWrapper,
    Type,
    CityLabel,
    CityName,
    Item,
    Icon,
    DriversName,
    DriversMainRow,
    StarsWrapper,
    Rating,
    StyledStarIcon,
    Price,
    Car,
    StyledDate,
    Time,
    Status,
    RightWrapper
} from "./TripStyles";
import {getMonthName} from "../../utils/index";

import Calendar from "../../icons/calendar.png"
import SteeringWheel from "../../icons/steering-wheel.png"
import Wallet from "../../icons/wallet-passes-app.png"
import CheckMark from "../../icons/check-mark.png"

export default function Trip({trip}) {
    console.log(trip.on_date);
    
    return (
        <MainWrapper>
            <RightWrapper>
                <Type>{trip.type}</Type>
                <CityWrapper>
                    <CityLabel>From</CityLabel>
                    <CityName>{trip.from?.en}</CityName>
                </CityWrapper>
                <CityWrapper>
                    <CityLabel>To</CityLabel>
                    <CityName>{trip.to?.en}</CityName>
                </CityWrapper>
            </RightWrapper>
            <div>
                <Item>
                    <Icon src={Calendar} />
                    <StyledDate>
                        {`${trip.on}`}
                        <Time>{`${trip.at}`}</Time>
                    </StyledDate>
                </Item>
                <Item>
                    <Icon src={SteeringWheel} />
                    <div>
                        <DriversMainRow>
                            <DriversName>{trip.driver?.name}</DriversName>
                        </DriversMainRow>
                        <Car>{trip.car}</Car>
                    </div>
                </Item>
                <Item className="item-center">
                    <Icon src={Wallet} />
                    <Price>{trip.price}</Price>
                </Item>
                <Item className="item-center">
                    <Icon src={CheckMark} />
                    <Status>{trip.status.title.en}</Status>
                </Item>
            </div>
        </MainWrapper>
    )
}
