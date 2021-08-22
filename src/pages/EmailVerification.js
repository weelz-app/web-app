import React from 'react';
import styled from "styled-components";
import { Container } from "react-bootstrap";
import EmailVerificationComponent from "../components/EmailVerification/EmailVerification";
import MobileImageAd from "../components/MobileImageAd/MobileImageAd";

const MainWrapper = styled.div`
    background-color: #fff;
    position: relative;
    height: 100vh;

    @media only screen and (min-width: 767px) and (max-width: 991px) {
        & .mobile-image-ad {
            width: 45%;
        }
    }
`;

export default function EmailVerification() {
    return (
        <MainWrapper>
            <Container>
                <EmailVerificationComponent />
            </Container>
            <MobileImageAd />
        </MainWrapper>
    )
}
