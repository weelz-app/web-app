import React, { useState } from "react";
import CarSelectionItem from "./CarSelectionItem";
import {
  CarSelectionListWrapper,
  NoCarsWrapper,
  NoCarsImg,
  NoCarsText,
  NoCarsHighlight
} from "./CarSelectionListStyles";
import { Row, Col } from "react-bootstrap";
import NoCarsImage from "../../icons/no-cars.png"

export default function CarSelectionList({ carOptions }) {
  const [selectedCar, setSelectedCar] = useState({ type: "" });
  const carItems = document.querySelectorAll(".car-item");

  if (carOptions.length > 0) {
    carItems.forEach((item) => {
      item.addEventListener("click", () => {
        carItems.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
        setSelectedCar(item);
      });
    });
  }

  return (
    <CarSelectionListWrapper>
      {carOptions.length > 0 ? (
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
      ) : (
        <NoCarsWrapper>
          <NoCarsImg src={NoCarsImage} />
          <NoCarsText>
            Seems like there are <NoCarsHighlight>no cars available</NoCarsHighlight> for this trip, check again soon.
          </NoCarsText>
        </NoCarsWrapper>
      )}
    </CarSelectionListWrapper>
  );
}
