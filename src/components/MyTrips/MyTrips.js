import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Trip from "./Trip"
import {
  Header,
  Title,
  ArrowIcon,
  Content
} from "./MyTripsStyle";

const MyTrips = ({trips}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <div>
      <Header>
        <Title>My Trips</Title>
        <ArrowIcon />
      </Header>
      <Content>
        <Carousel responsive={responsive}>
          {trips.map(trip => (
            <Trip key={trip.id} trip={trip} />
          ))}
        </Carousel>
      </Content>
    </div>
  );
};

export default MyTrips;
