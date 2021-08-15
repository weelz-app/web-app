import React from "react";
import BookingTopMenuDemo from "../components/BookingTopMenu/BookingTopMenuDemo"
import CarSelectionList from "../components/CarSelection/CarSelectionList"
import ToolBar from "../components/ToolBar/ToolBar"
import { Container } from "react-bootstrap";

let carOptions = [
    {
      id: 1,
      type: "standard",
      description: "Hyundai Elantra",
      price: "50",
      currency: "EGP",
      originalPrice: "60",
      img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
    },
    {
      id: 2,
      type: "premium",
      description: "Hyundai Elantra",
      price: "50",
      currency: "EGP",
      originalPrice: "60",
      img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
    },
    {
      id: 3,
      type: "premium",
      description: "Hyundai Elantra",
      price: "50",
      currency: "EGP",
      originalPrice: "60",
      img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
    },
    {
      id: 4,
      type: "premium",
      description: "Hyundai Elantra",
      price: "50",
      currency: "EGP",
      originalPrice: "60",
      img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
    }
];

const CarSelection = () => {
    return (
        <div>
            <BookingTopMenuDemo />
            <Container>
                <ToolBar
                    showBtn={true}
                    btnDisabled={carOptions.length > 0 ? false : true}
                    btnText="Request Car"
                />
                <CarSelectionList carOptions={carOptions} />
            </Container>
        </div>
    );
}

export default CarSelection;