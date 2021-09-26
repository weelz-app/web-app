import React, {useCallback, useState} from 'react';
import { Title, Item, Link, Text, LinkWrapper } from "./BookingSideBarStyles";
import CitySelector from "../CitySelector/CitySelector";
import DateTimePickerCustimzed from "../DateTimePicker/DateTimePicker";
import BookingInfoDialogue from "../BookingInfoDialogue/BookingInfoDialogue";
import Btn from "../Btn/Btn";
import ConfirmTrip from "../ConfirmTrip/ConfirmTrip";

export default function BookingSideBar({b}) {
    const [booking, setBooking] = useState(b);
    let cityList = ["Alex", "Cairo", "Other"];

    const handleBooking = useCallback((newVal) => {
        setBooking(oldB => ({ ...oldB, ...newVal }));
    }, [])

    return (
        <>
            <Title>What's Your Next Destination?</Title>
            <Item>
                <CitySelector
                    mode="from"
                    cityList={cityList}
                    selectedCity={booking.from}
                    setSelectedCity={(from) => handleBooking({ from })}
                    className="sidebar__city-selector"
                    icon="secondary"
                    iconSize={{width: "13.2", height: "23.6"}}
                />
            </Item>
            <Item >
                <CitySelector
                    mode="to"
                    selectedCity={booking.to}
                    cityList={cityList}
                    setSelectedCity={(to) => handleBooking({ to })}
                    className="sidebar__city-selector"
                />
            </Item>
            <Item className="date-picker">
                <DateTimePickerCustimzed ts={booking.ts} setTs={(ts) => handleBooking({ ts })} />
            </Item>
            <Item>
                <BookingInfoDialogue
                    booking={booking}
                    bookingUpdated={(bookingOptions) => handleBooking(bookingOptions)}
                    className="sidebar__booking-info"
                />
            </Item>
            <Btn  text="New Trip!" className="btn--block" />
            <LinkWrapper>
                <Text>City not listed?</Text>
                <Link>Let us know</Link>
            </LinkWrapper>
        </>
    )
}
