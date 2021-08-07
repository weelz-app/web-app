import styled from "styled-components";
import Carousel from "react-multi-carousel";



export const NotificationSlider = styled(Carousel)`
display:flex;
flex-direction: column;
`

export const NotificationsWrapper = styled.div`
  background: white;
  margin-bottom:10px;
`;
export const NotificationItem = styled.div`
  /* background: grey; */
`;

export const NotificationHeader = styled.h4`
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  
`;

export const Icon = styled.img`
  width: 22px;
  height: 29px;
  margin: 0 7px 0 0;
  object-fit: contain;
`;
export const MainLabel = styled.span`
  font-family: Montserrat;
  font-size: 9px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-bottom: 3px;
`;
export const Excerpt = styled.span`  width: 132.5px;
/* margin: 1.5px 9px 0 0; */
font-family: Montserrat;
font-size: 10px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 0.87;
letter-spacing: normal;
text-align: left;
color: #939393;`

export const NotificationCard = styled.div`width: 320px;
/* margin: 0 0 7px; */
/* padding: 5.5px 15px 5.5px 5px; */
border-radius: 5px;
background-color: #f7f7f7;`