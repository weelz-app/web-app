import React from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import TripBookingMenu from "../components/TripBookingMenu/TripBookingMenu"
import ToolBar from "../components/ToolBar/ToolBar"

const MainWrapper = styled.div`

`;

let b = {
    from: "Alex",
    to: "Cairo",
    ts: "1628806200960",
    type: "Standard",
    status: "Confirmed"
};

export default function Trip() {
    return (
        <MainWrapper>
            <TripBookingMenu b={b} />
            <Container>
                <ToolBar
                    showBtn={true}
                    btnText="Cancel Trip"
                />
                <Row>
                    <Col>
                        Test 1
                    </Col>
                    <Col>
                        Test 2
                    </Col>
                    <Col>
                        Test 3
                    </Col>
                </Row>
            </Container>
        </MainWrapper>
    )
}
