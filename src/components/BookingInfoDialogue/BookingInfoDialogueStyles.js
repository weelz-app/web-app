import styled from "styled-components";

export const Div = styled.div`
  &:not(&.sidebar__booking-info) {
    width: 245px;
    padding: 0 21.3px 0 21px;
    border-radius: 5px;
    box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
    position: absolute;
    top: 50px;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    z-index: 1;
  }

  &:not(&.sidebar__booking-info).active {
    max-height: 1000px;
    transition: max-height 0.5s ease-in;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 16px;
  }
  &:last-of-type {
    margin-bottom: 16px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
    width: 15.6px;
    height: 15.6px;
    line-height: 0;
    margin-right: 4px;

    .App.ar & {
      margin-right: 0;
      margin-left: 4px;
    }
`;

export const Title = styled.h3`
  margin: 0.5px 0 1.1px 10.9px;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  color: #474747;

  .App.ar & {
    margin: 0.5px 10.9px 1.1px 0;
  }
`;