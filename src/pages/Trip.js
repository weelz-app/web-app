import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BookingTopMenu from "../components/BookingTopMenu/BookingTopMenu"
import ToolBar from "../components/ToolBar/ToolBar"
import TripSummary from "../components/TripSummary/TripSummary"
import TripDriver from "../components/TripDriver/TripDriver"
import MobileAppAd from "../components/MobileAppAd/MobileAppAd"
import ConfirmCancelTrip from "../components/ConfirmCancelTrip/ConfirmCancelTrip"

export default function Trip() {
    const [isOpen, setIsOpen] = useState(false);
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

    const cancelTrip = () => {
        setBooking(oldB => ({ ...oldB, status: "Canceled" }));
        setIsOpen(val => !val)
    }

    return (
        <>
            <ConfirmCancelTrip
                toggleModal={() => setIsOpen(val => !val)}
                cancelTrip={() => cancelTrip()}
                isOpen={isOpen}
            />
            <div className="navbar-padding with-bar" style={{paddingBottom: "48px"}}>
                <BookingTopMenu b={booking} page="Trips" />
                <Container>
                    <ToolBar
                        showBtn={booking.status === "Canceled" ? false : true}
                        btnVariant="cancel-btn"
                        btnText="Cancel Trip"
                        btnOnClock={() => setIsOpen(val => !val)}
                    />
                    <Row>
                        <Col xs={12} sm={6} lg={5}>
                            <TripSummary booking={booking} />
                        </Col>
                        <Col sm={6} lg={4} className="d-none d-sm-block">
                            <TripDriver driver={booking.driver} />
                        </Col>
                        <Col lg={3} className="d-none d-lg-block">
                            <MobileAppAd look="image" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
