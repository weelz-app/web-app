import React, { useState, useCallback, useEffect } from "react";
import { Div, Item, Hide, Btn, BtnText, BtnIcon, Bar } from "./BookingTopMenuStyles";
import CitySelector from "../CitySelector/CitySelector";
import DateTimePickerCustimzed from "../DateTimePicker/DateTimePicker";
import BookingInfoDialogue from "../BookingInfoDialogue/BookingInfoDialogue";

export default function BookingTopMenu({ b }) {
  const [booking, setBooking] = useState(b);
  let cityList = ["Alex", "Cairo", "Other"];

  const handleBooking = useCallback((newVal) => {
    setBooking(oldB => ({ ...oldB, ...newVal }));
  }, [])

  const toggleBookingInfo = () => {
    document.getElementById("booking-info").classList.toggle("active");
  };

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
    <Div>
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
      <Hide className="item-btn">
        <Bar />
        <Item>
          <Btn onClick={() => toggleBookingInfo()}>
            <BtnText>More Info</BtnText>
            <BtnIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-down"
                height="5.9"
                width="8.9"
                className="svg-inline--fa fa-chevron-down fa-w-14"
                role="img"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                />
              </svg>
            </BtnIcon>
          </Btn>
          <BookingInfoDialogue
            id="booking-info"
            booking={booking}
            bookingUpdated={(bookingOptions) => handleBooking(bookingOptions)}
          />
        </Item>
      </Hide>
    </Div>
  );
}
