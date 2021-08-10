import React, { useState } from "react";
import CarSelectionItem from "./CarSelectionItem";
import { CarSelectionListWrapper } from "./CarSelectionListStyles";
import { Row, Col } from "react-bootstrap";

export default function CarSelectionList({ carOptions }) {
  const [selectedCar, setSelectedCar] = useState({ type: "" });

  const handleClickOnCar = (e, car) => {
    document.querySelectorAll(".car-item").forEach((ele) => {
      ele.classList.remove("active");
    });

    let ele = e.target;

    if (
      ele.classList.contains("car__details-wrapper") ||
      ele.classList.contains("car__img")
    ) {
      ele = ele.parentElement;
    } else if (
      ele.classList.contains("car__text-wrapper") ||
      ele.classList.contains("car__price-wrapper")
    ) {
      ele = ele.parentElement.parentElement;
    } else if (
      ele.classList.contains("car__title") ||
      ele.classList.contains("car__icon-wrapper") ||
      ele.classList.contains("car__des")
    ) {
      ele = ele.parentElement.parentElement.parentElement;
    } else if (
      ele.classList.contains("car__original-price") ||
      ele.classList.contains("car__price") ||
      ele.tagName === "svg"
    ) {
      ele = ele.parentElement.parentElement.parentElement.parentElement;
    } else if (ele.tagName === "path") {
      ele =
        ele.parentElement.parentElement.parentElement.parentElement
          .parentElement;
    }

    ele.classList.add("active");
    setSelectedCar(car);
  };

  return (
    <CarSelectionListWrapper>
      <Row>
        {carOptions.map((car) => (
          <Col xs={12} sm={6} lg={3}>
            <CarSelectionItem
              className="car-item"
              key={car.id}
              carOption={car}
              onClick={(e) => handleClickOnCar(e, car)}
              active={car.type === selectedCar.type ? true : false}
            />
          </Col>
        ))}
      </Row>
    </CarSelectionListWrapper>
  );
}
