import styled from "styled-components";

export const Div = styled.div`
  width: 253px;
  padding: 16px 21.3px 15.5px 21px;
  border-radius: 5px;
  box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  position: absolute;
  top: 50px;
  /* max-height: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden; */
  display: none;

  &.active {
    /* max-height: 1000px;
    padding: 16px 21.3px 15.5px 21px;
    transition: max-height 0.5s ease-in; */
    display: block;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
    width: 13.6px;
    height: 13.6px;
    line-height: 0;
    margin-right: 4px;
`;

export const Title = styled.h3`
  margin: 0.5px 0 1.1px 10.9px;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  color: #474747;
`;