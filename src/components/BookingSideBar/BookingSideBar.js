import React, { useCallback, useState } from 'react';
import { Title, Item, Link, Text, LinkWrapper } from "./BookingSideBarStyles";
import CitySelector from "../CitySelector/CitySelector";
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined'
import BookingInfoDialogue from "../BookingInfoDialogue/BookingInfoDialogue";
import Btn from "../Btn/Btn";
import DateFnsUtils from '@date-io/date-fns'
import { CITIES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import lime from "@material-ui/core/colors/lime";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { formatDate, formatTime } from '../../utils';
import { useHistory, useLocation } from 'react-router-dom'


export default function BookingSideBar({ b }) {
    let location = useLocation()
    let history = useHistory()
    const defaultMaterialTheme = createTheme({
        keyboardDatePicker: {
            color: lime,
            textColor: lime,
            calendarTextColor: lime,
            selectColor: lime,
            selectTextColor: lime,
            calendarYearBackgroundColor: lime,
            headerColor: lime,
        },
    });
    var now = new Date();
    
    let defaultBooking = {
        on: now,
        at: now,
        passengers: 1,
        luggage: 0,
        pets: false,
        nonSmoking: false
    }
    const [booking, setBooking] = useState(b || defaultBooking);
    const { loading, data } = useQuery(CITIES);


    const handleBooking = useCallback((newVal) => {
        setBooking({ ...booking, ...newVal });
    }, [booking])


    const submit = useCallback(() => {
        history.push({
            pathname: '/cars',
            state: [{
                ...booking,
                at: formatTime(booking.at),
                on: formatDate(booking.on)
            }]
        })
    }, [booking])

    return (
        <>
            <Title>What's Your Next Destination?</Title>
            <Item>
                <CitySelector
                    mode="from"
                    cityList={data ? data.cities : []}
                    setSelectedCity={(city) => handleBooking({ from: city.id })}
                    className="sidebar__city-selector"
                    icon="secondary"
                    iconSize={{ width: "13.2", height: "23.6" }}
                />
            </Item>
            <Item >
                <CitySelector
                    mode="to"
                    cityList={data ? data.cities : []}
                    setSelectedCity={(city) => handleBooking({ to: city.id })}
                    className="sidebar__city-selector"
                />
            </Item>
            <Item className="date-picker">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <KeyboardDatePicker
                            fullWidth
                            inputVariant='filled'

                            disablePast={true}
                            disableToolbar={true}
                            margin='dense'
                            id='date'
                            label='Date'
                            value={booking.on}
                            onChange={on => handleBooking({ on })}

                        />
                        <KeyboardTimePicker
                            fullWidth

                            inputVariant='filled'
                            margin='dense'
                            id='time'
                            label='Time'

                            value={booking.at}
                            keyboardIcon={<ScheduleOutlinedIcon />}
                            onChange={at => handleBooking({ at })}
                        />
                    </ThemeProvider>
                </MuiPickersUtilsProvider>
            </Item>
            <Item>
                <BookingInfoDialogue
                    booking={booking}
                    bookingUpdated={(bookingOptions) => handleBooking(bookingOptions)}
                    className="sidebar__booking-info"
                />
            </Item>
            <Btn
            disabled={!booking.from || !booking.to || !booking.on || !booking.at}
                onClick={submit}
                text="Select Your Car" className="btn--block" />
            <LinkWrapper>
                <Text>City not listed?</Text>
                <Link>Let us know</Link>
            </LinkWrapper>
        </>
    )
}
