import React from "react";
import {
  CarSelectionItemWrapper,
  Title,
  Description,
  CarImage,
  PriceWrapper,
  WalletIconWrapper,
  Price,
  OriginalPrice,
  DetailsWrapper
} from "./CarSelectionItemStyles";

export default function CarSelectionItem({ carOption, onClick, className }) {
  return (
    <CarSelectionItemWrapper onClick={onClick} className={className}>
      <DetailsWrapper className="car__details-wrapper">
        <div className="car__text-wrapper">
          <Title className="car__title">{carOption.type}</Title>
          <Description className="car__des">
            {carOption.description}
          </Description>
        </div>
        <PriceWrapper className="car__price-wrapper">
          <WalletIconWrapper className="car__Icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.8"
              height="18.8"
              viewBox="0 0 37.527 37.533"
            >
              <path
                fill="#00c3e1"
                d="M36.1 10.34a1.466 1.466 0 0 0 1.466-1.466V7.335A7.343 7.343 0 0 0 30.23 0S7.251 0 7.194.01a7.484 7.484 0 0 0-5.131 2.3A7.226 7.226 0 0 0 .042 7.589v21.143a8.811 8.811 0 0 0 8.8 8.8H30.23a7.343 7.343 0 0 0 7.335-7.332V19.068a7.343 7.343 0 0 0-7.335-7.335H7.367a4.389 4.389 0 0 1-4.393-4.188 4.321 4.321 0 0 1 1.21-3.21 4.536 4.536 0 0 1 3.267-1.4l22.779-.003a4.408 4.408 0 0 1 4.4 4.4v1.542a1.466 1.466 0 0 0 1.47 1.466zM7.367 14.665H30.23a4.408 4.408 0 0 1 4.4 4.4V30.2a4.408 4.408 0 0 1-4.4 4.4H8.839a5.876 5.876 0 0 1-5.869-5.869V13.2a7.31 7.31 0 0 0 4.4 1.46zM31.7 24.633a1.832 1.832 0 1 1-1.831-1.833 1.832 1.832 0 0 1 1.831 1.833zm0-17.3a1.466 1.466 0 0 0-1.466-1.466H7.367a1.466 1.466 0 0 0 0 2.932h22.868A1.466 1.466 0 0 0 31.7 7.335z"
                transform="translate(-0.038 0)"
              />
            </svg>
          </WalletIconWrapper>
          <div className="car__prices-wrapper">
            <Price className="car__price">
              {carOption.price + " " + carOption.currency}
            </Price>
            {carOption.originalPrice &&
            carOption.price !== carOption.originalPrice ? (
              <OriginalPrice className="car__original-price">
                {carOption.originalPrice + " " + carOption.currency}
              </OriginalPrice>
            ) : null}
          </div>
        </PriceWrapper>
      </DetailsWrapper>
      <CarImage src={carOption.img} className="car__img" />
    </CarSelectionItemWrapper>
  );
}
