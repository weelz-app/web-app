import React from "react";

export default function CarSelectionItem({ carOption }) {
  return (
    <>
      {carOption.type}
      <img src={carOption.img} />
    </>
  );
}
