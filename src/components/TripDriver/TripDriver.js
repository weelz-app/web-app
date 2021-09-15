import React from "react";
import LicensePlate from 'react-license-plate-egypt';
import "react-multi-carousel/lib/styles.css";
import {
  MainWrapper,
  SectionTitle,
  DriverWraper,
  Avatar,
  DriverIcons,
  DriverIcon,
  StyledWhatsAppIcon,
  StyledPhoneIcon,
  DriverText,
  DriverName,
  DriverNumber,
  CarWrapper,
  CarRow,
  CarLabel,
  CarName,
  CarImageWrapper,
  CarImage,
  StyledCarousel
} from './TripDriverStyle';

function TripDriver({driver}) {
  return (
    <MainWrapper>
      <SectionTitle>Driver Information</SectionTitle>
      <DriverWraper>
        <Avatar src={driver.avatar} />
          <DriverText>
            <DriverName>{driver.name}</DriverName>
            <DriverNumber>{driver.number}</DriverNumber>
          </DriverText>
          <DriverIcons>
            <DriverIcon>
              <StyledWhatsAppIcon />
            </DriverIcon>
            <DriverIcon>
              <StyledPhoneIcon />
            </DriverIcon>
          </DriverIcons>
      </DriverWraper>
      <SectionTitle>Car Information</SectionTitle>
      <CarWrapper>
        <div>
          <StyledCarousel
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 1
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1
              }
            }}
            additionalTransfrom={0}
            centerMode={false}
            arrows={false}
            showDots={true}
            itemClass="trip-slide"
            slidesToSlide={1}
            swipeable
            draggable
          >
            {driver.car.images.map(carImg => (
              <CarImageWrapper>
                <CarImage src={carImg} />
              </CarImageWrapper>
            ))}
          </StyledCarousel>
        </div>
        <CarRow>
          <div>
            <CarLabel>Car</CarLabel>
            <CarName>{driver.car.name}</CarName>
          </div>
          <div>
            <LicensePlate number={driver.car.license} width='80' />
          </div>
        </CarRow>
      </CarWrapper>
    </MainWrapper>
  
  );
}

export default TripDriver;
