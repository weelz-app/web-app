// --------- Styles
import styled from 'styled-components';

export const DriverDivi = styled.div`
    .driver-data{
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px -3px;
      padding: 7px 15px ;
      position: relative;
      margin-bottom: 15px;
      .driver-photo{
        width: 50px;
        height: 50px;
        border-radius: 50% !important;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .data-contact{
        position: absolute;
        display: flex;
        align-items: center;
        right: 15px;
        top: 52px;
        direction: ltr !important;
        .btn-control{
          background: transparent !important;
          width: 37px !important;
          height: 37px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          overflow: hidden;
          border: none !important;
          padding: 0 !important;
          &:first-of-type{
            margin-right: 10px !important;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
        @media(max-width: 390px){
          right: 1px;
          top: auto;
          flex-wrap: wrap;
          bottom: -15px;
          .btn-control{
            width: 30px;
            height: 30px;
          }
        }
      }
      .driver-text{
        padding: 3px 15px;
        .driver-name, .driver-phone{
          margin: 5px 0 !important;
        }
        .driver-phone{
          color: #00C3E1;
        }
      }
    }
    .car-data{
      background: #fff;
      border-radius: 10px !important;
      overflow: hidden;
      box-shadow: 0 0 6px -3px #000;
      .slick-dots{
        position: absolute;
        text-align: center;
        align-items: center;
        bottom: 10px;
      }
      .slider-cars{
        img{
          width: 100% !important;
        }
        .slick-slider{
          .slick-slide{
              div{
                outline: none !important;
                cursor: grab;
              }
          }
        }
      }
      .slick-dots li button:before{
        font-size: 15px;
        color: #989898;
        opacity: 1;
      }
      .slick-dots .slick-active button:before{
        color: #fff !important;
      }
      .car-nm{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 9px;
        .car-text{
          .car-data-text{
            padding: 3px 15px;
            .car-name, .car-model{
              margin: 5px 0 !important;
            }
            .car-model{
              color: #00C3E1;
              @media (max-width: 390px) {
                font-size: .75em !important;
              }
            }
          }
        }
      }
    }


    .title-driver{
      color: #322B77;
      margin-bottom: 15px !important;
    }
`;