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
import AvatarIcon from '../../icons/avatar.png';
import CarImg from '../../icons/car.jpg';
import CarLogoImg from '../../icons/carLogo.png';

function TripDriver() {
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
        <Avatar src={AvatarIcon} />
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}>
          <DriverRow>
            <DriverName>Ibrahem Adel</DriverName>
            <RatingWrapper>
              <RatingIcon />
              <RatingText>4.4</RatingText>
            </RatingWrapper>
          </DriverRow>
          <DriverNumber>+201200000000</DriverNumber>
        </div>
      </DriverWraper>
      <SectionTitle>Car Details</SectionTitle>
      <div>
        <CarRow>
          <div>
            <CarLogo src={CarLogoImg} />
            <CarName>Renault Logan 2019</CarName>
          </div>
          <div>
            <LicensePlate number={'سجط ٢٥٩٤'} width='90' />
          </div>
        </CarRow>
        <CarImages>
          <StyledCarousel
            responsive={responsive}
            centerMode={true}
            itemClass="trip-slide"
          >
            <CarImageWrapper>
              <CarImage src={CarImg} />
            </CarImageWrapper>
            <CarImageWrapper>
              <CarImage src={CarImg} />
            </CarImageWrapper>
            <CarImageWrapper>
              <CarImage src={CarImg} />
            </CarImageWrapper>
            <CarImageWrapper>
              <CarImage src={CarImg} />
            </CarImageWrapper>
          </StyledCarousel>
        </CarImages>
      </div>
    </MainWrapper>
  
  );
}

export default TripDriver;
