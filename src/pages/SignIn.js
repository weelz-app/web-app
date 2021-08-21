import React from 'react';
import styled from "styled-components";
import { Container } from "react-bootstrap";
import SignInComponent from "../components/SignIn/SignIn";
import MobileImageAd from "../components/MobileImageAd/MobileImageAd";

const MainWrapper = styled.div`
    background-color: #fff;
    position: relative;
    height: 100vh;
`;

export default function SignIn() {
    return (
        <MainWrapper>
            <Container>
                <SignInComponent />
            </Container>
            <MobileImageAd />
        </MainWrapper>
    )
}
