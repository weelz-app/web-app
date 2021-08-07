import React from "react";

import Slider from "react-slick";

import LicensePlate from 'react-license-plate-egypt';

import {DriverDivi} from './TripDriverStyle';


// ----- Images
import avatar from '../icons/avatar.png';
import car from '../icons/car.jpg';
import phoneOne from '../icons/ic_phone.svg';
import phoneTwo from '../icons/ic_whatsapp.svg';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function TripDriver() {

  return (
    <DriverDivi>
      <h5 className="title-driver">Driver Information</h5>
      <div className="driver-data">
        <div className="driver-photo">
          <img src={avatar} />
        </div>

        <div className="driver-text">
          <h6 className="driver-name">Ahmed.S Mahmoud</h6>
          <h6 className="driver-phone">+20 01276354421</h6>
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
            <div>
              <img src={car} />
            </div>

            <div>
              <img src={car} />
            </div>

            <div>
              <img src={car} />
            </div>
          </Slider>
        </div>

        <div className="car-nm">
          {/* <img src={avatar} /> */}

          <div className="car-text">
            <div className="car-data-text">
              <h6 className="car-name">Car</h6>
              <h6 className="car-model">Hyundai Matrix 2011</h6>
            </div>

          </div>

          <div className="car-number">
            <LicensePlate number={'سجط ٢٥٩٤'} className="carnum" width='100' />
          </div>
        </div>
      </div>
    </DriverDivi>
  
  );
}

export default TripDriver;
