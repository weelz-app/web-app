import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import TitleTopBar from "../components/TitleTopBar/TitleTopBar"
import ToolBar from "../components/ToolBar/ToolBar"
import TripSummary from "../components/TripSummary/TripSummary"
import FeedbackCard from "../components/Feedback/FeedbackCard"
import FeedbackThanks from "../components/FeedbackThanks/FeedbackThanks"
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
    const [feedback, setFeedback] = useState({
        driver: {
            name: "Ahmed ElSwa2",
            rating: 3
        },
        car: {
            name: "Hyundai Elantra",
            rating: 3
        },
        overall: {
            rating: 3
        },
        comment: "Ok"
    });
    const [isOpen, setIsOpen] = useState(false);
    const date = new Date(parseInt(booking.ts));

    return (
        <>
            <FeedbackThanks
                toggleModal={() => setIsOpen(val => !val)}
                isOpen={isOpen}
            />
            <div className="navbar-padding" style={{paddingBottom: "48px"}}>
                <TitleTopBar title="Feedback" city={`${booking.from} - ${booking.to}, ${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`} />
                <Container>
                    <ToolBar showBtn={false} />
                    <Row>
                        <Col md={5} className="d-none d-md-block">
                            <TripSummary booking={booking} />
                        </Col>
                        <Col xs={12} md={7}>
                            <FeedbackCard feedback={feedback} toggleFeedbackThanks={() => setIsOpen(val => !val)} setFeedback={(val) => setFeedback(val)} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
