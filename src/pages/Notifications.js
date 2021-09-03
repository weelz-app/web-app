import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import TitleTopBar from "../components/TitleTopBar/TitleTopBar"
import ToolBar from "../components/ToolBar/ToolBar"
import NotificationsList from "../components/Notifications/NotificationsList"
import MobileAppAd from "../components/MobileAppAd/MobileAppAd"

const notifications = [
    {
        id: 1,
        type: "info",
        title: "We are waiting your feedback!",
        msg: "Alexandria to Cairo trip, 10 May 2021"
    },
    {
        id: 2,
        type: "confirmed",
        title: "Your trip has been confirmed!",
        msg: "Alexandria to Cairo trip, 10 May 2021"
    },
    {
        id: 3,
        type: "pending",
        title: "Your trip is pending confirmation",
        msg: "Alexandria to Cairo trip, 10 May 2021"
    },
    {
        id: 4,
        type: "canceled",
        title: "Your trip has been cancelled!",
        msg: "Alexandria to Cairo trip, 10 May 2021"
    },
    {
        id: 5,
        type: "info",
        title: "We are waiting your feedback!",
        msg: "Alexandria to Cairo trip, 10 May 2021"
    }
]

export default function Notifications() {
    return (
        <div className="navbar-padding with-bar" style={{paddingBottom: "48px"}}>
            <TitleTopBar title="Notifications" />
            <Container>
                <ToolBar showBtn={false} backLink="/" />
                <Row>
                    <Col xs={12} md={8}>
                        <NotificationsList variant="notifications-page" notifications={notifications} showHeader={false} />
                    </Col>
                    <Col md={4} className="d-none d-md-block">
                        <MobileAppAd look="image" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
