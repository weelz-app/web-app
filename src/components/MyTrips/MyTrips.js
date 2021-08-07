import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CardWrapper,
  CardHeaderC,
  Indicator,
  ImgIcon,
  DriversName,
  Price,
  Car,
  DatePicker,
  Status,
} from "./MyTripsStyle";
import StarIcon from "@material-ui/icons/Star";
const MyTrips = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-3" style={{ background: "#f6f6f6" }}>
      <h1>My Trips</h1>
      <Container fluid className="p-3" style={{ background: "white" }}>
        <Carousel responsive={responsive}>
          <CardWrapper className=" d-flex flex-column  p-3 mr-3">
            <Row>
              <Col>
                <CardHeaderC>Standard</CardHeaderC>
              </Col>
            </Row>
            <Row>
              <Col className=" d-flex align-items-left">
                <div className="d-flex flex-column">
                  <Indicator>From</Indicator>
                  <span style={{ marginBottom: "13px" }}>Alexandria</span>
                  <Indicator>to</Indicator>
                  <span>haram</span>
                </div>
              </Col>
              <Col className=" text-left">
                <div className="d-flex flex-column">
                  <div className="d-flex mb-2">
                    <ImgIcon
                      className="my-auto"
                      src="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/bcd49605-ee16-465f-8b31-ee9bc458985b.svg"
                    />
                    <div className="d-flex flex-column my-auto">
                      <DatePicker className="text-start">
                        10 May 2021
                      </DatePicker>
                      <DatePicker className="text-start">10 pm</DatePicker>
                    </div>
                  </div>
                  <div className="d-flex  justify-content-between  ">
                    <div className="d-flex flex-row align-items-center   w-100">
                      <ImgIcon
                        className="my-auto"
                        src="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/61a58fe1-e6f3-41b6-ae12-97cad15917ea.svg"
                      />
                      <DriversName className="text-start">
                        Driver's Name
                      </DriversName>
                    </div>

                    <div className="d-flex">
                      <StarIcon fontSize={"small"} />
                      <span>4.2</span>
                    </div>
                  </div>
                  <Car className=" text-center">Renault Logan 2019</Car>
                  <div className="d-flex align-items-center  text-center justify-content-start mt-2">
                    <ImgIcon
                      className="my-auto "
                      src="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/b90a51b6-f4d5-4d14-b9c3-8dc34403c29f.svg"
                    />
                    <Price>30EGP</Price>
                  </div>
                  <div className="d-flex align-items-center  text-center justify-content-start mt-2 ">
                    <ImgIcon
                      className="my-auto "
                      src="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/04ee4119-2f5a-4ded-97b0-ed646a70d26a.svg"
                    />
                    <Status>confirmed</Status>
                  </div>
                </div>
              </Col>
            </Row>
          </CardWrapper>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </Carousel>
      </Container>
    </div>
  );
};

export default MyTrips;
