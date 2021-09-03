import styled from "styled-components";
import Cairo from "../../icons/cairo.jpg";

export const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: relative;
  background-image: url(${Cairo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0 0;
  height: 141px;
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
  font-size: 12px;
  font-weight: 600;
  line-height: 2.5;
  color: #fff;
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
`;

export const Label = styled.span`
  font-family: Montserrat;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.22;
  color: #fff;
  display: block;
`;

export const Text = styled.span`
  margin: 11px 0 0;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.23;
  color: #fff;
`;

export const Body = styled.div`
  border-radius: 0 0 5px 5px;
  padding: 15px 15px 22.5px 15px;
  box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
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
  width: 10.4px;
  height: 13.6px;
  margin: 0 10.9px 0 0;
  object-fit: contain;
`;

export const BodyLabel = styled.span`
  width: 75px;
  margin: 0 45px 0 0;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  color: #474747;
`;

export const BodyText = styled.span`
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 600;
  line-height: 0.91;
  color: #000;
`;

export const Price = styled.span`
  color: #00c3e1;
`;
