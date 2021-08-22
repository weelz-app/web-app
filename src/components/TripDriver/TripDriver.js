import React from "react";
import LicensePlate from 'react-license-plate-egypt';
import "react-multi-carousel/lib/styles.css";
import {
  MainWrapper,
  SectionTitle,
  DriverWraper,
  Avatar,
  DriverRow,
  DriverName,
  DriverNumber,
  RatingWrapper,
  RatingIcon,
  RatingText,
  CarRow,
  CarLogo,
  CarName,
  CarImages,
  CarImageWrapper,
  CarImage,
  StyledCarousel
} from './TripDriverStyle';

function TripDriver({driver}) {
  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 2,
      partialVisibilityGutter: 30
    }
  };

  return (
    <MainWrapper>
      <SectionTitle>Driver Details</SectionTitle>
      <DriverWraper>
        <Avatar src={driver.avatar} />
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}>
          <DriverRow>
            <DriverName>{driver.name}</DriverName>
            <RatingWrapper>
              <RatingIcon />
              <RatingText>{driver.rating}</RatingText>
            </RatingWrapper>
          </DriverRow>
          <DriverNumber>{driver.number}</DriverNumber>
        </div>
      </DriverWraper>
      <SectionTitle>Car Details</SectionTitle>
      <div>
        <CarRow>
          <div>
            <CarLogo src={driver.car.logo} />
            <CarName>{driver.car.name}</CarName>
          </div>
          <div>
            <LicensePlate number={driver.car.license} width='90' />
          </div>
        </CarRow>
        <CarImages>
          <StyledCarousel
            responsive={responsive}
            centerMode={true}
            itemClass="trip-slide"
          >
            {driver.car.images.map(carImg => (
              <CarImageWrapper>
                <CarImage src={carImg} />
              </CarImageWrapper>
            ))}
          </StyledCarousel>
        </CarImages>
      </div>
    </MainWrapper>
  
  );
}

export default TripDriver;
