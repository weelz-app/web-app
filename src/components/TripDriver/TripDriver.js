import React from "react";
import LicensePlate from 'react-license-plate-egypt';
import Carousel from "react-multi-carousel";
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
  CarWraper,
  CarRow,
  CarLogo,
  CarName,
  CarImages,
  CarImage
} from './TripDriverStyle';
import AvatarIcon from '../../icons/avatar.png';
import CarImg from '../../icons/car.jpg';
import CarLogoImg from '../../icons/carLogo.png';

function TripDriver() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1325 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1325, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
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
      <CarWraper>
        <CarRow>
          <div>
            <CarLogo src={CarLogoImg} />
            <CarName>Renault Logan 2019</CarName>
          </div>
          <div>
          <LicensePlate number={'سجط ٢٥٩٤'} width='100' />
          </div>
        </CarRow>
        <CarImages>
          <Carousel responsive={responsive}>
            <CarImage src={CarImg} />
            <CarImage src={CarImg} />
            <CarImage src={CarImg} />
          </Carousel>
        </CarImages>
      </CarWraper>
    </MainWrapper>
  
  );
}

export default TripDriver;
