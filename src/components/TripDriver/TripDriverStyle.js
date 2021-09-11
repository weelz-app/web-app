import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import Carousel from "react-multi-carousel";

export const MainWrapper = styled.div`
  padding: 15px 15.5px 21.5px 15px;
  border-radius: 5px;
  box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

export const SectionTitle = styled.h4`
  margin: 0 0 10.5px 0;
  font-family: Montserrat;
  font-size: 11.5px;
  font-weight: 600;
  line-height: 2.52;
  color: #180e3d;
`;

export const DriverWraper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  margin-right: 10px;

  .App.ar & {
    margin-left: 10px;
    margin-right: 0;
  }
`;

export const DriverRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingIcon = styled(StarIcon)`
  margin: 0 1.5px 0 0;
  color: #ffc713;

  &.MuiSvgIcon-root {
    width: 7.7px;
    height: 7.3px;
  }
`;

export const RatingText = styled.span`
  font-family: Montserrat;
  font-size: 7px;
  font-weight: 500;
  line-height: 2.29;
  color: #000;
`;

export const CarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarLogo = styled.img`
  width: 43.2px;
  height: 14px;
  margin: 0 0 3.6px 0;
  object-fit: contain;
`;

export const CarName = styled.p`
  width: 78px;
  margin: 0;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  color: #000;
`;

export const CarImages = styled.div`
  margin-top: 10px;
`;

export const StyledCarousel = styled(Carousel)`
  & .trip-slide {
    width: 90px !important;
    height: 90px;
    margin-right: 7.5px;
  }
`;

export const CarImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 2.5px;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
