import React from "react";
import styled from "styled-components";
import BookingSideBar from "../components/BookingSideBar/BookingSideBar"
import MobileAppAd from "../components/MobileAppAd/MobileAppAd"
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
                        <Row>
                            <Col sm={8}>
                                Test 2
                            </Col>
                            <Col sm={4}>
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