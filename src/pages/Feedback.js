import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import TitleTopBar from "../components/TitleTopBar/TitleTopBar"
import ToolBar from "../components/ToolBar/ToolBar"
import TripSummary from "../components/TripSummary/TripSummary"
import {getMonthName} from "../utils/index";

export default function Feedback() {
    const [booking, setBooking] = useState({
        from: "Alexandria",
        to: "Cairo",
        ts: "1628605559",
        passengers: 4,
        luggage: 2,
        pets: false,
        nonSmoking: true,
        type: "Standard",
        status: "Pending",
        price: "30",
        currency: "EGP"
    });
    const date = new Date(parseInt(booking.ts));

    return (
        <div className="navbar-padding" style={{paddingBottom: "48px"}}>
            <TitleTopBar title="Feedback" city={`${booking.from} - ${booking.to}, ${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`} />
            <Container>
                <ToolBar showBtn={false} />
                <Row>
                    <Col xs={12} sm={5}>
                        <TripSummary booking={booking} />
                    </Col>
                    <Col sm={7} className="d-none d-sm-block">
                        Test
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
