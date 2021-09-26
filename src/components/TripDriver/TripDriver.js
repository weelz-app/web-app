import React from "react";
import Slider from "react-slick";
import LicensePlate from 'react-license-plate-egypt';
import "react-multi-carousel/lib/styles.css";
import { DriverDivi } from './TripDriverStyle';
import iconCar from '../../icons/ic_car.svg';
import phoneOne from '../../icons/ic_phone.png';
import phoneTwo from '../../icons/ic_whatsapp.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function TripDriver({driver}) {
  return (
    <DriverDivi>
      <h5 className="title-driver">Driver Information</h5>
      <div className="driver-data">
        <div className="driver-photo">
          <img src={driver.avatar} />
        </div>

        <div className="driver-text">
          <h6 className="driver-name">{driver.name}</h6>
          <h6 className="driver-phone">{driver.number}</h6>
        </div>

        <div className="data-contact">
          <button className="btn-control">
            <img src={phoneTwo} />
          </button>

          <button className="btn-control">
            <img src={phoneOne} />
          </button>
        </div>
      </div>
      <h5 className="title-driver">Driver Information</h5>
      <div className="car-data">

        <div className="slider-cars">
          <Slider {...settings}>
            {driver.car.images.map(carImg => (
                <div>
                  <img src={carImg} />
                </div>
              ))}
          </Slider>
        </div>

        <div className="car-nm">

          <div className="car-text d-flex align-items-center">
            <img src={iconCar} className="mr-3" />
            <div className="car-data-text">
              <h6 className="car-name">Car</h6>
              <h6 className="car-model">{driver.car.name}</h6>
            </div>

          </div>

          <div className="car-number">
            <LicensePlate number={driver.car.license} className="carnum" width='100' />
          </div>
        </div>
      </div>
    </DriverDivi>
  
  );
}

export default TripDriver;
