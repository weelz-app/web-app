import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  padding: 12.8px 0;
  background-color: #fff;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 991px) {
      display: none;
  }
`;

export const LeftItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Item = styled.span`
  height: auto;
  width: 200px;
  position: relative;
`;

export const Hide = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    &.item-calander {
      display: none;
    }
  }
`;

export const Bar = styled.span`
  width: 0;
  height: 12.1px;
  margin: 8.4px 17px;
  position: relative;
  top: 2px;
  border: solid 1px #ebebeb;
`;

export const Type = styled.div`
    width: 120px;
    height: 30px;
    margin: 0 10px 0 0;
    padding: 8.5px 33.5px 8px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: bold;
    line-height: 1.23;
    color: #00c3e1;
    position: relative;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.1;
    border-radius: 2.5px;
    background-color: #00c3e1
`;

export const StatusOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 2.5px;
    background-color: #0bb500;
    opacity: 0.05;
`;

export const Status = styled.div`
    width: 131px;
    height: 30px;
    padding: 8.5px 26.5px 8px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: bold;
    line-height: 1.23;
    color: #0bb500;
    position: relative;
`;

export const StatusIcon = styled.img`
    width: 11px;
    height: 11px;
    margin: 0 5px 0 0;
    object-fit: contain;
`;
