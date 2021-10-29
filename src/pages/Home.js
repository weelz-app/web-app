import React from "react";
import styled from "styled-components";
import BookingSideBar from "../components/BookingSideBar/BookingSideBar"
import MobileAppAd from "../components/MobileAppAd/MobileAppAd"
import NotificationsList from "../components/Notifications/NotificationsList"
import MyTrips from "../components/MyTrips/MyTrips"
import { Container, Row, Col } from "react-bootstrap";

const MainWrapper = styled.div`
    margin: 28px 0;
`;

const Home = ({ lang }) => {
    
    return (
        
             <Container className="navbar-padding">
                <MainWrapper>
                    <Row>
                        <Col xs={12} sm={5} md={4}>
                            <BookingSideBar />
                        </Col>
                        <Col sm={7} md={8} className="d-none d-sm-block">
                            <Row>
                                <Col>
                                    <MyTrips  />
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "6px" }}>
                                <Col sm={12} lg={7}>
                                    <NotificationsList showHeader={true} />
                                </Col>
                                <Col lg={5} className="d-none d-lg-block">
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