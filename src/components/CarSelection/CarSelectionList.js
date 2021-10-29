import React from "react";
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

export default function CarSelectionList({ carOptions, selectedCar, setSelectedCar }) {

  return (
    <CarSelectionListWrapper>
      {carOptions.length > 0 ? (
        <Row>
          {carOptions.map((car) => (
            < Col xs={12} sm={6} lg={3} key={car.type} >
              <CarSelectionItem
                key={car.type}
                carOption={car}
                active={car && selectedCar && car.type === selectedCar.type ? true : false}
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
      )
      }
    </CarSelectionListWrapper >
  );
}
