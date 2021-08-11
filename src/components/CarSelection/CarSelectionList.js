import React, { useState } from "react";
import CarSelectionItem from "./CarSelectionItem";
import { CarSelectionListWrapper } from "./CarSelectionListStyles";
import { Row, Col } from "react-bootstrap";

export default function CarSelectionList({ carOptions }) {
  const [selectedCar, setSelectedCar] = useState({ type: "" });
  const carItems = document.querySelectorAll(".car-item");

  carItems.forEach((item) => {
    item.addEventListener("click", () => {
      carItems.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      setSelectedCar(item);
    });
  });

  return (
    <CarSelectionListWrapper>
      <Row>
        {carOptions.map((car) => (
          <Col xs={12} sm={6} lg={3}>
            <CarSelectionItem
              className="car-item"
              key={car.id}
              carOption={car}
              active={car.type === selectedCar.type ? true : false}
            />
          </Col>
        ))}
      </Row>
    </CarSelectionListWrapper>
  );
}
