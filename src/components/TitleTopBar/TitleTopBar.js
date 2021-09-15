import React from 'react';
import {
    MainWrapper,
    Div,
    Title,
    City
} from "./TitleTopBarStyles";
import { Container } from "react-bootstrap";

export default function TitleTopBar({title, city}) {
    return (
        <MainWrapper>
            <Container>
                <Div>
                    <Title>{title}</Title>
                    <City>{city}</City>
                </Div>
            </Container>
        </MainWrapper>
    )
}
