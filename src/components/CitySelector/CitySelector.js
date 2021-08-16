import React, { useState } from "react";
import {
  MainWrapper,
  Div,
  Icon,
  Label,
  City,
  ArrowIcon,
  DropdownMenu,
  DropdownItem
} from "./CitySelectorStyles";
export default function CitySelector({
  mode,
  cityList,
  selectedCity,
  setSelectedCity
}) {
  const [city, setCity] = useState(selectedCity);

  const selectCity = (e, city) => {
    setCity(city);
    setSelectedCity(city);
    e.target.parentElement.classList.remove("active");
  };

  return (
    <div style={{width: "100%"}}>
      <MainWrapper className="city-selector">
        <Div>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Group_12"
              width="11.3"
              height="16.9"
              viewBox="0 0 22.536 33.803"
            >
              <path
                fill="#05bbd6"
                id="Path_1"
                d="M539.751 746.333a11.245 11.245 0 0 0-2.161-2.684l-12.7 22.006 5.108 8.847 9.727-16.852.029-.049.023-.041a11.265 11.265 0 0 0-.026-11.227z"
                className="cls-1"
                transform="translate(-518.725 -740.699)"
              />
              <path
                fill="#05bbd6"
                id="Path_3"
                d="M511.269 731.734a11.268 11.268 0 0 0-9.783 16.861l.023.04.029.049 2.15 3.724 11.525-19.961a11.249 11.249 0 0 0-3.944-.713z"
                className="cls-1"
                transform="translate(-500 -731.734)"
              />
            </svg>
          </Icon>
          <div>
            <Label>{mode}</Label>
            <City>{city}</City>
          </div>
        </Div>
        <ArrowIcon className="city-arrow-icon">
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
        </ArrowIcon>
      </MainWrapper>

      <DropdownMenu className="city-dropdown">
        {cityList.map((item, key) => (
          <DropdownItem key={key} onClick={(e) => selectCity(e, item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </div>
  );
}
