import React, {useState, useEffect, useCallback} from 'react';
import {
    MainWrapper,
    Div,
    Item,
    Hide,
    Type,
    Overlay,
    Status,
    StatusIcon,
    Bar,
    RightItems,
    LeftItems,
    StatusOverlay
} from "./TripBookingMenuStyles";
import { Container } from "react-bootstrap";
import CitySelector from "../CitySelector/CitySelector";
import DateTimePickerCustimzed from "../DateTimePicker/DateTimePicker";
import CheckMarkIcon from "../../icons/check-mark.png";

export default function TripBookingMenu({ b }) {
    const [booking, setBooking] = useState(b);
    let cityList = ["Alex", "Cairo", "Other"];

    const handleBooking = useCallback((newVal) => {
        setBooking(oldB => ({ ...oldB, ...newVal }));
    }, [])

    useEffect(() => {
        const citySelectors = document.querySelectorAll(".city-selector");
        const dropdowns = document.querySelectorAll(".city-dropdown");

        const toggleCitySelectorDropdown = (citySelector) => {
        if (citySelector.nextElementSibling.classList.contains("active")) {
            citySelector.nextElementSibling.classList.remove("active")
        } else {
            dropdowns.forEach((item) => {
            item.classList.remove("active");
            });
    
            setTimeout(() => {
            citySelector.nextElementSibling.classList.add("active");
            }, 400);
        }
        }

        citySelectors.forEach((citySelector) => {
        citySelector.addEventListener("click", () => toggleCitySelectorDropdown(citySelector));
        });

        return function cleanUp() {
        citySelectors.forEach((citySelector) => {
            citySelector.removeEventListener("click", () => toggleCitySelectorDropdown(citySelector));
        });
        }
    }, []);

    return (
        <MainWrapper>
            <Container>
                <Div>
                    <LeftItems>
                        <Item>
                            <CitySelector
                                mode="from"
                                cityList={cityList}
                                selectedCity={booking.from}
                                setSelectedCity={(from) => handleBooking({ from })}
                                />
                        </Item>
                        <Bar />
                        <Item>
                            <CitySelector
                                mode="to"
                                selectedCity={booking.to}
                                cityList={cityList}
                                setSelectedCity={(to) => handleBooking({ to })}
                                />
                        </Item>
                        <Hide className="item-calander">
                            <Bar />
                            <Item>
                                <DateTimePickerCustimzed ts={booking.ts} setTs={(ts) => handleBooking({ ts })} />
                            </Item>
                        </Hide>
                    </LeftItems>

                    <RightItems>
                        <Type>
                            <Overlay />
                            {booking.type}
                        </Type>
                        <Status>
                            <StatusOverlay />
                            <StatusIcon src={CheckMarkIcon} />
                            {booking.status}
                        </Status>
                    </RightItems>
                </Div>
            </Container>
        </MainWrapper>
    )
}
