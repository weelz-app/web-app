import React, {useCallback, useState, useEffect} from 'react';
import { Title, Item, Link, Text } from "./BookingSideBarStyles";
import CitySelector from "../CitySelector/CitySelector";
import DateTimePickerCustimzed from "../DateTimePicker/DateTimePicker";
import BookingInfoDialogue from "../BookingInfoDialogue/BookingInfoDialogue";
import Btn from "../Btn/Btn";

export default function BookingSideBar({b}) {
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
            <Item>
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
            <Btn text="New Trip!" className="btn--block" />
            <div style={{marginTop: "10px"}}>
                <Text>City not listed?</Text>
                <Link>Let us know</Link>
            </div>
        </>
    )
}
