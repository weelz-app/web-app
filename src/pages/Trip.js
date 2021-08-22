import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BookingTopMenu from "../components/BookingTopMenu/BookingTopMenu"
import ToolBar from "../components/ToolBar/ToolBar"
import TripSummary from "../components/TripSummary/TripSummary"
import TripDriver from "../components/TripDriver/TripDriver"

export default function Trip() {
    const [booking, setBooking] = useState({
        from: "Alexandria",
        to: "Cairo",
        ts: "1628605559",
        passengers: 4,
        luggage: 2,
        pets: false,
        nonSmoking: true,
        type: "Standard",
        status: "Canceled",
        price: "30",
        currency: "EGP"
    });
    return (
        <div>
            <BookingTopMenu b={booking} page="Trips" />
            <Container>
                <ToolBar
                    showBtn={booking.status === "Canceled" ? false : true}
                    btnVariant="cancel-btn"
                    btnText="Cancel Trip"
                />
                <Row>
                    <Col xs={12} sm={6}>
                        <TripSummary booking={booking} />
                    </Col>
                    <Col sm={6} md={4} className="d-none d-sm-block">
                        <TripDriver booking={booking} />
                    </Col>
                    <Col md={2} className="d-none d-md-block">
                        Test 3
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
