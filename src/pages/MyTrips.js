import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import TitleTopBar from "../components/TitleTopBar/TitleTopBar"
import ToolBar from "../components/ToolBar/ToolBar"
import AllMyTrips from "../components/AllMyTrips/AllMyTrips"

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
        from: "Giza",
        to: "Cairo",
        ts: "1630689812380",
        driver: "Ibrahem Adel",
        rating: "4.2",
        car: "Renault Logan 2019",
        price: "30",
        currency: "EGP",
        status: "Confirmed"
    },
    {
        id: 5,
        type: "Standard",
        from: "Alexandria",
        to: "Cairo",
        ts: "1630689812380",
        driver: "Ibrahem Adel",
        rating: "4.2",
        car: "Renault Logan 2019",
        price: "30",
        currency: "EGP",
        status: "Confirmed"
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
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

export default function MyTrips() {
    return (
        <div className="navbar-padding with-bar" style={{paddingBottom: "48px"}}>
            <TitleTopBar title="My Trips" />
            <Container>
                <ToolBar showBtn={false} backLink="/" />
                <Row>
                    <Col>
                        <AllMyTrips trips={myTrips} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
