import React from "react";
import CarSelectionItem from "./CarSelectionItem";

export default function CarSelectionList({ carOptions }) {
  return (
    <>
      {carOptions.map((car) => (
        <CarSelectionItem key={car.id} carOption={car} />
      ))}
    </>
  );
}
