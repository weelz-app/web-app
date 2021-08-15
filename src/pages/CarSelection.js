import React from "react";
import BookingTopMenuDemo from "../components/BookingTopMenu/BookingTopMenuDemo"
import CarSelectionListDemo from "../components/CarSelection/CarSelectionListDemo"
import ToolBar from "../components/ToolBar/ToolBar"
import { Container } from "react-bootstrap";

const CarSelection = () => {
    return (
        <div>
            <BookingTopMenuDemo />
            <Container>
                <ToolBar />
                <CarSelectionListDemo />
            </Container>
        </div>
    );
}

export default CarSelection;