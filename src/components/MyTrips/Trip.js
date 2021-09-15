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
    const date = new Date(parseInt(trip.ts));
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hours = hours.toString().length === 2 ? hours : "0" + hours;
    const minutes = date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes();
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    return (
        <MainWrapper>
            <RightWrapper>
                <Type>{trip.type}</Type>
                <CityWrapper>
                    <CityLabel>From</CityLabel>
                    <CityName>{trip.from}</CityName>
                </CityWrapper>
                <CityWrapper>
                    <CityLabel>To</CityLabel>
                    <CityName>{trip.to}</CityName>
                </CityWrapper>
            </RightWrapper>
            <div>
                <Item>
                    <Icon src={Calendar} />
                    <StyledDate>
                        {`${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`}
                        <Time>{`${hours}:${minutes} ${ampm}`}</Time>
                    </StyledDate>
                </Item>
                <Item>
                    <Icon src={SteeringWheel} />
                    <div>
                        <DriversMainRow>
                            <DriversName>{trip.driver}</DriversName>
                            <StarsWrapper>
                                <StyledStarIcon />
                                <Rating>{trip.rating}</Rating>
                            </StarsWrapper>
                        </DriversMainRow>
                        <Car>{trip.car}</Car>
                    </div>
                </Item>
                <Item className="item-center">
                    <Icon src={Wallet} />
                    <Price>{trip.price + " " + trip.currency}</Price>
                </Item>
                <Item className="item-center">
                    <Icon src={CheckMark} />
                    <Status>{trip.status}</Status>
                </Item>
            </div>
        </MainWrapper>
    )
}
