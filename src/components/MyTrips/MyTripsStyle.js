import { Container } from "react-bootstrap";
import styled from "styled-components";

export const CardWrapper = styled(Container)`
  /* margin: 0 10.9px 0 0; */
  /* padding: 0.5px 0.8px 0px 0.5px; */
  margin-right: 15px;
  border-radius: 5px;
  background-color: #eefafc;
`;
export const CardHeaderC = styled.h4`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #180e3d;
`;
export const DatePicker = styled.span`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-left: 8px;
`;
export const Indicator = styled.span`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #00c3e1;
`;

export const ImgIcon = styled.img`
  /* position: absolute; */
  width: 11.2px;
  height: 11.2px;
  /* margin: 0 5.3px 11.8px 0; */
  object-fit: contain;
  margin-bottom: 10px;
`;

export const DriversName = styled.span`
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-left: 8px;
`;

export const Car = styled.span`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #a5a5a5;
`;

export const Price = styled.span`
  width: 33.5px;
  height: 11px;
  margin: 0.5px 0 0.2px 12px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

export const Status = styled.span`
  margin-left: 8px;
  font-family: Montserrat;
  font-size: 9px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: normal;
  text-align: left;
  color: #30b50f;
`;
