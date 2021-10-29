import React, { useState } from "react";
import BookingTopMenu from "../components/BookingTopMenu/BookingTopMenu"
import CarSelectionList from "../components/CarSelection/CarSelectionList"
import ToolBar from "../components/ToolBar/ToolBar"
import { Container } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router-dom'
import { CAR_OPTIONS } from "../graphql/queries";
import { NEW_BOOKING } from "../graphql/mutations";
import { useQuery, useMutation } from "@apollo/client";
import ConfirmTrip from "../components/ConfirmTrip/ConfirmTrip";

const CarSelection = () => {
  let location = useLocation()
  let history = useHistory()
  const [selectedCar, setSelectedCar] = useState();
  const [showConfirm, setChowConfirm] = useState(false);
  const { loading, data } = useQuery(CAR_OPTIONS, {
    variables: {
      booking: {
        ...location.state[0]
      },
    },
  });
  const [newBooking] = useMutation(NEW_BOOKING)
  return (
    <div className="navbar-padding with-bar">
      <BookingTopMenu page="Car Selection" b={location.state[0]} />
      <Container>
        <ToolBar
          showBtn={true}
          btnDisabled={!data || !selectedCar}
          btnText="Request Car"
          btnOnClick={() => {
            newBooking({
              variables: {
                booking: { ...location.state[0], carType: selectedCar.type }
              }
            }).then(response => {
              let id = response.data.newBooking.id
              console.log(id)
              //localStorage.setItem('bookingId', id)
              //history.push(`/booking/${id}`)
            }).catch(err => {
              console.log(err)
            })
          }}
          backLink="/"
        />
        {loading && <p>Loading ...</p>}
        {!loading && <CarSelectionList carOptions={data ? data.carOptions : []}
          selectedCar={selectedCar} setSelectedCar={setSelectedCar} />}
      </Container>
    </div>
  );
}

export default CarSelection;