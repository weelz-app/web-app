import React from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import TripBookingMenu from "../components/TripBookingMenu/TripBookingMenu"
import ToolBar from "../components/ToolBar/ToolBar"
import TripSummary from "../components/TripSummary/TripSummary"
import TripDriver from "../components/TripDriver/TripDriver"

const MainWrapper = styled.div`

`;

const b = {
    from: "Alexandria",
    to: "Cairo",
    ts: "1628605559",
    passengers: 4,
    luggage: 2,
    pets: false,
    nonSmoking: true,
    type: "Standard",
    status: "Confirmed",
    price: "30",
    currency: "EGP"
};

export default function Trip() {
    return (
        <MainWrapper>
            <TripBookingMenu b={b} />
            <Container>
                <ToolBar
                    showBtn={true}
                    btnVariant="cancel-btn"
                    btnText="Cancel Trip"
                />
                <Row>
                    <Col xs={12} sm={6}>
                        <TripSummary booking={b} />
                    </Col>
                    <Col sm={6} md={4} className="d-none d-sm-block">
                        <TripDriver />
                    </Col>
                    <Col md={2} className="d-none d-md-block">
                        Test 3
                    </Col>
                </Row>
            </Container>
        </MainWrapper>
    )
}
