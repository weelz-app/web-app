import React, { useState } from 'react';
import {
    ModalWrapper,
    StyledModal,
    TitleWrapper,
    Title,
    Header,
    HeaderText,
    Type,
    TypeIcon,
    TypeText,
    TypeOverlay,
    LineIcon,
    CitiesWrapper,
    CityWrapper,
    Icon,
    CityLabel,
    CityName,
    DetailsWrapper,
    DeatilsRow,
    DetailsItem,
    DetailsLabel,
    DetailsText,
    Price,
    ChoicesWrapper,
    ChoicesTitle,
    Tags,
    Tag,
    TagIcon,
    TagOverlay,
} from "./ConfirmTripStyles";
import {getMonthName} from "../../utils/index";
import Btn from "../Btn/Btn";
import Fade from '@material-ui/core/Fade';

import CarIcon from "../../icons/ic_cartype.png";
import LineImg from "../../icons/line.png";
import LocationImg from "../../icons/location_pin.png";
import ToImg from "../../icons/ic_to_pin.png";
import PriceImg from "../../icons/ic_price.png";
import PassengerImg from "../../icons/ic_passenger.png";
import DateImg from "../../icons/ic_depature.png";
import LuggageImg from "../../icons/ic_luggage.png";
import PetImg from "../../icons/pawprint.svg";
import SmokingImg from "../../icons/smoking.svg";

export default function ConfirmTrip({b}) {
    const [booking, setBooking] = useState(b);
    const [isOpen, setIsOpen] = useState(false);
    const date = new Date(parseInt(booking.ts));
    let currentHours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    currentHours = currentHours.toString().length === 2 ? currentHours : "0" + currentHours;
    const currentMinutes = date.getMinutes().toString().length === 2 ? date.getMinutes() : "0" + date.getMinutes();

    return (
        <>
            <div
                onClick={() => setIsOpen(val => !val)}
                style={{
                    marginLeft: "30px",
                    marginTop: "200px",
                    cursor: "pointer"
                }}
            >
                Try Confirm Trip
            </div>
            <ModalWrapper
                open={isOpen}
                onClose={() => setIsOpen(false)}
                closeAfterTransition
                disableEnforceFocus={true}
            >
                <Fade in={isOpen}>
                    <StyledModal>
                        <TitleWrapper>
                            <Title>
                                Does everything look right?
                            </Title>
                        </TitleWrapper>
                        <Header>
                            <HeaderText>Trip Summery</HeaderText>
                            <Type>
                                <TypeOverlay />
                                <TypeIcon src={CarIcon} />
                                <TypeText>Standard</TypeText>
                            </Type>
                        </Header>
                        <CitiesWrapper>
                            <CityWrapper>
                                <Icon src={LocationImg} />
                                <div>
                                    <CityLabel>From</CityLabel>
                                    <CityName>{booking.from}</CityName>
                                </div>
                            </CityWrapper>
                            <LineIcon src={LineImg} />
                            <CityWrapper>
                                <Icon src={ToImg} />
                                <div>
                                    <CityLabel>To</CityLabel>
                                    <CityName>{booking.to}</CityName>
                                </div>
                            </CityWrapper>
                        </CitiesWrapper>
                        <DetailsWrapper>
                            <DeatilsRow>
                                <DetailsItem>
                                    <Icon src={DateImg} />
                                    <div>
                                        <DetailsLabel>Departure</DetailsLabel>
                                        <DetailsText>{`${date.getDate()} ${getMonthName(date.getMonth())} At ${currentHours}:${currentMinutes}`}</DetailsText>
                                    </div>
                                </DetailsItem>
                                <DetailsItem>
                                    <Icon src={LuggageImg} />
                                    <div>
                                        <DetailsLabel>Luggage</DetailsLabel>
                                        <DetailsText>{booking.luggage}</DetailsText>
                                    </div>
                                </DetailsItem>
                            </DeatilsRow>
                            <DeatilsRow>
                                <DetailsItem>
                                    <Icon src={PriceImg} />
                                    <div>
                                        <DetailsLabel>Price</DetailsLabel>
                                        <DetailsText>
                                            <Price>{`${booking.price} ${booking.currency}`}</Price>
                                        </DetailsText>
                                    </div>
                                </DetailsItem>
                                <DetailsItem>
                                    <Icon src={PassengerImg} />
                                    <div>
                                        <DetailsLabel>Passengers</DetailsLabel>
                                        <DetailsText>{booking.passengers}</DetailsText>
                                    </div>
                                </DetailsItem>
                            </DeatilsRow>
                        </DetailsWrapper>
                        <ChoicesWrapper>
                            <ChoicesTitle>Extra Choices</ChoicesTitle>
                            <Tags>
                                <Tag>
                                    <TagOverlay />
                                    <TagIcon src={SmokingImg} />
                                    <TypeText>Smoking</TypeText>
                                </Tag>
                                <Tag>
                                    <TagOverlay />
                                    <TagIcon src={PetImg} />
                                    <TypeText>Pets</TypeText>
                                </Tag>
                            </Tags>
                        </ChoicesWrapper>
                        <Btn
                            text="Confirm Request"
                            className="btn--block btn--confirm"
                        />
                    </StyledModal>
                </Fade>
            </ModalWrapper>
        </>
    )
}
