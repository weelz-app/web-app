import styled from 'styled-components';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import Carousel from "react-multi-carousel";

export const MainWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const SectionTitle = styled.h4`
  margin: 0 0 5px 0;
  font-family: Montserrat;
  font-size: 11.5px;
  font-weight: 600;
  line-height: 2.52;
  color: #180e3d;
`;

export const DriverWraper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  padding: 10px 20px;
  position: relative;
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;
  border-radius: 50%;
  margin-right: 10px;

  .App.ar & {
    margin-left: 10px;
    margin-right: 0;
  }
`;

export const DriverText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const DriverName = styled.span`
  margin: 0 5px 0 0;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 500;
  line-height: 0.82;
  color: #000;

  .App.ar & {
    margin: 0 0 0 5px;
  }
`;

export const DriverNumber = styled.span`
  margin: 0.8px 0 0 0;
  font-family: Montserrat;
  font-size: 9px;
  font-weight: 500;
  line-height: 1;
  color: #00c3e1
`;

export const DriverIcons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: -10px;
`;

export const DriverIcon = styled.div`
  & .MuiSvgIcon-root {
    padding: 9px;
    font-size: 34px;
    background-color: #333;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
  }
`;

export const StyledWhatsAppIcon = styled(WhatsAppIcon)`
  &.MuiSvgIcon-root {
    background-color: #01e093;
    margin-right: 6px;

    &:hover {
      background-color: #06bf7f;
    }
  }
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
  &.MuiSvgIcon-root {
    background-color: #02c1e0;
    
    &:hover {
      background-color: #03a1bb;
    }
  }
`;

export const CarWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

export const CarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const CarLabel = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const CarName = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  color: #00c3e1;
`;

export const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-dot button {
    background-color: #a5a5a5;
    border: 0;
  }

  .react-multi-carousel-dot--active button {
    background-color: #fff;
  }

  .react-multi-carousel-dot button:hover,
  .react-multi-carousel-dot button:hover:active {
    background-color: #a5a5a5ba;
  }
`;

export const CarImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 2.5px;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`;
