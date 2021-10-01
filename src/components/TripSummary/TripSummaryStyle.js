import styled from "styled-components";
import Cairo from "../../icons/cairo.jpg";

export const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2.5px 8px 0 rgb(0 0 0 / 5%);
  overflow: hidden;
  @media (min-width: 992px) {
    &.trip-sm-main{
        .accordion-flush{
            height: 100%;
            .accordion-item{
                height: 100%;
                .accordion-collapse{
                    height: calc(100% - 170px);
                    display: block !important;
                }
                .accordion-button{
                  cursor: default !important;
                  .MuiSvgIcon-root{
                    display: none !important;
                  }
                }
            }
        }
    }
  }
`;

export const Header = styled.div`
  position: relative;
  background-image: url(${Cairo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0 0;
  height: 170px;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px 15px 21.5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px 5px 0 0;
  opacity: 0.5;
  background-image: linear-gradient(183deg,#00c3e1 0%,#584995 70%, #000000 100%);
`;

export const Title = styled.h4`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin: 0 !important;
    .sub-title-dv{
      .accordion-button{
        padding: 0;
        background: transparent;
        color: #fff !important;
        outline: none !important;
        box-shadow: none !important;
        overflow: hidden;
        .MuiSvgIcon-root{
          font-size: 48px;
          width: auto;
          position: absolute;
          right: -11px;
          transition: all .2s;
        }
        &:after{
          display: none !important;
        }
        &.collapsed{
          .MuiSvgIcon-root{
            transform: rotate(-90deg);              
          }
        }
      }
    }
  `;

export const Items = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  margin-right: 25px;

  &:last-of-type {
    margin-right: 0;
  }

  .App.ar & {
    margin-right: 0;
    margin-left: 25px;

    &:last-of-type {
      margin-left: 0;
    }
  }
`;

export const Label = styled.span`
  font-family: Montserrat;
  font-size: 13px;
  margin-bottom: 7px !Important;
  color: #fff;
  display: block;
`;

export const Text = styled.span`
  margin: 11px 0 0;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
`;

export const Body = styled.div`
  padding: 15px 15px 22.5px 15px;
  background-color: #fff;
  flex: 1;
`;

export const BodyItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10.9px 0 0;
  object-fit: contain;
  .App.ar & {
    margin: 0 0 0 10.9px;
  }
`;

export const BodyLabel = styled.span`
  width: 112px;
  margin: 0 45px 0 0;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  color: #474747;

  .App.ar & {
    margin: 0 0 0 45px;
  }
`;

export const BodyText = styled.span`
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  line-height: 0.91;
  color: #000;
`;

export const Price = styled.span`
  color: #00c3e1;
`;
