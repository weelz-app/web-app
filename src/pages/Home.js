import React from "react";
import styled from "styled-components";
import BookingSideBar from "../components/BookingSideBar/BookingSideBar"
import MobileAppAd from "../components/MobileAppAd/MobileAppAd"
import NotificationsList from "../components/Notifications/NotificationsList"
import MyTrips from "../components/MyTrips/MyTrips"
import { Container, Row, Col } from "react-bootstrap";

const booking = {
    from: "Alex",
    to: "Cairo",
    ts: "1628605559",
    passengers: 4,
    luggage: 2,
    pets: false,
    nonSmoking: true
};

const notifications = [
    {
        id: 1,
        title: "We are waiting your feedback!",
        msg: "Alexandria to Cairo trip, 10 May 2021"
    },
    {
        id: 2,
        title: "We are waiting your feedback!",
        msg: "Sahel to Cairo trip, 18 May 2021"
    },
    {
        id: 3,
        title: "Another Message!",
        msg: "Another details for this notification"
    }
]

const myTrips = [
    {
        id: 1,
        type: "Standard",
        from: "Alexandria",
        to: "Cairo",
        ts: "1629436375456",
        driver: "Ibrahem Adel",
        rating: "4.2",
        car: "Renault Logan 2019",
        price: "30",
        currency: "EGP",
        status: "Confirmed"
    },
    {
        id: 2,
        type: "Standard",
        from: "Cairo",
        to: "Alexandria",
        ts: "1629436375456",
        driver: "Ibrahem Adel",
        rating: "4.2",
        car: "Renault Logan 2019",
        price: "50",
        currency: "EGP",
        status: "Confirmed"
    },
    {
        id: 3,
        type: "Vip",
        from: "Other",
        to: "Cairo",
        ts: "1629436375456",
        driver: "Youssef Adel",
        rating: "4.7",
        car: "Renault Logan 2021",
        price: "90",
        currency: "EGP",
        status: "Confirmed"
    },
    {
        id: 4,
        type: "Standard",
        from: "Alexandria",
        to: "Cairo",
        ts: "1629436375456",
        driver: "Ibrahem Adel",
        rating: "4.2",
        car: "Renault Logan 2019",
        price: "30",
        currency: "EGP",
        status: "Confirmed"
    }
]

const MainWrapper = styled.div`
    margin: 28px 0;
`;

const Home = () => {
    return (
        <Container>
            <MainWrapper>
                <Row>
                    <Col xs={12} sm={5} md={4}>
                        <BookingSideBar b={booking} />
                    </Col>
                    <Col sm={7} md={8} className="d-none d-sm-block">
                        <Row>
                            <Col>
                                <MyTrips trips={myTrips} />
                            </Col>
                        </Row>
                        <Row style={{marginTop: "15px"}}>
                            <Col sm={12} md={7}>
                                <NotificationsList notifications={notifications} />
                            </Col>
                            <Col md={5} className="d-none d-md-block">
                                <MobileAppAd />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </MainWrapper>
        </Container>
    );
}

export default Home;