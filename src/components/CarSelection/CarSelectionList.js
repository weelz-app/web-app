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

  return (
    <CarSelectionListWrapper>
      {carOptions.length > 0 ? (
        <Row>
          {carOptions.map((car) => (
            <Col xs={12} sm={6} lg={3} key={car.id}>
              <CarSelectionItem
                key={car.id}
                carOption={car}
                active={car.id === selectedCar.id ? true : false}
                selectCar={() => setSelectedCar(car)}
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
