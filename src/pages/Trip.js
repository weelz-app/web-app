import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BookingTopMenu from "../components/BookingTopMenu/BookingTopMenu"
import ToolBar from "../components/ToolBar/ToolBar"
import TripSummary from "../components/TripSummary/TripSummary"
import TripDriver from "../components/TripDriver/TripDriver"

// import AvatarIcon from '../icons/avatar.png';
// import CarImg from '../icons/car.jpg';
// import CarLogoImg from '../icons/carLogo.png';

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
        currency: "EGP",
        driver: {
            name: "Ibrahem Adel",
            avatar: "/avatar.png",
            rating: "4.4",
            number: "+201200000000",
            car: {
                logo: "/carLogo.png",
                name: "Renault Logan 2019",
                license: "سجط ٢٥٩٤",
                images: [
                    "/car.jpg",
                    "/car.jpg",
                    "/car.jpg",
                    "/car.jpg",
                ],
            }
        }
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
                        <TripDriver driver={booking.driver} />
                    </Col>
                    <Col md={2} className="d-none d-md-block">
                        Test 3
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
