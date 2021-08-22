import React from "react";
import BookingTopMenu from "../components/BookingTopMenu/BookingTopMenu"
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

const b = {
  from: "Alexandria",
  to: "Cairo",
  ts: "1628605559",
  passengers: 4,
  luggage: 2,
  pets: false,
  nonSmoking: true
};

const CarSelection = () => {
    return (
        <div>
            <BookingTopMenu page="Car Selection" b={b} />
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