import React, { useState } from "react";
import { Div, Item, Btn, BtnText, BtnIcon, Bar } from "./BookingTopMenuStyles";
import CitySelector from "../CitySelector/CitySelector";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import BookingInfoDialogue from "../BookingInfoDialogue/BookingInfoDialogue";

export default function BookingTopMenu({ b }) {
  const [booking, setBooking] = useState(b);
  let cityList = ["Alex", "Cairo", "Other"];

  const handleBooking = (newVal) => {
    setBooking({ ...booking, ...newVal });
  };

  const toggleBookingInfo = () => {
    document.getElementById("booking-info").classList.toggle("active");
  };

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
      <Bar />
      <Item>
        <DateTimePicker ts={booking.ts} setTs={(ts) => handleBooking({ ts })} />
      </Item>
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
    </Div>
  );
}
