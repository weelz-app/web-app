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
    Date,
    Time,
    Status
} from "./TripStyles";

import Calendar from "../../icons/calendar.png"
import SteeringWheel from "../../icons/steering-wheel.png"
import Wallet from "../../icons/wallet-passes-app.png"
import CheckMark from "../../icons/check-mark.png"

export default function Trip() {
    return (
        <MainWrapper>
            <div>
                <Type>Standard</Type>
                <CityWrapper>
                    <CityLabel>From</CityLabel>
                    <CityName>Alexandria</CityName>
                </CityWrapper>
                <CityWrapper>
                    <CityLabel>To</CityLabel>
                    <CityName>Cairo</CityName>
                </CityWrapper>
            </div>
            <div>
                <Item>
                    <Icon src={Calendar} />
                    <Date>
                        10 May 2021
                        <Time>10:15 PM</Time>
                    </Date>
                </Item>
                <Item>
                    <Icon src={SteeringWheel} />
                    <div>
                        <DriversMainRow>
                            <DriversName>Ibrahem Adel</DriversName>
                            <StarsWrapper>
                                <StyledStarIcon />
                                <Rating>4.2</Rating>
                            </StarsWrapper>
                        </DriversMainRow>
                        <Car>Renault Logan 2019</Car>
                    </div>
                </Item>
                <Item>
                    <Icon src={Wallet} />
                    <Price>30 EGP</Price>
                </Item>
                <Item>
                    <Icon src={CheckMark} />
                    <Status>Confirmed</Status>
                </Item>
            </div>
        </MainWrapper>
    )
}
