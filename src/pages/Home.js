import React from "react";
import styled from "styled-components";
import BookingSideBar from "../components/BookingSideBar/BookingSideBar"
import MobileAppAd from "../components/MobileAppAd/MobileAppAd"
import NotificationsList from "../components/Notifications/NotificationsList"
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
                            Test 1
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