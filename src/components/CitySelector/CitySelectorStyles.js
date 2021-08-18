import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  // &.sidebar__city-selector {
  //   border-radius: 5px;
  //   box-shadow: 0 2.5px 8px 0 rgb(0 0 0 / 5%);
  //   background-color: #fff;
  //   padding: 8px 15px 7.5px 14.4px;
  // }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: ${({iconWidth}) => iconWidth + "px"};
  height: ${({iconHeight}) => iconHeight + "px"};
  margin: 0 8.2px 0 0;
  line-height: 0;

  .sidebar__city-selector & {
    margin: 0 15.9px 0.9px 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-family: Montserrat;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.22;
  color: #bfbfbf;
`;

export const City = styled.span`
  display: block;
  margin-top: 1px;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.23;
  color: #000;
`;

export const ArrowIcon = styled.div`
  width: 8.9px;
  height: 5.9px;
  line-height: 0;
  margin: 5.8px 0 4.8px 66.6px;
  
  @media only screen and (max-width: 425px) {
    & {
      margin: 5.8px 0 4.8px 30.6px;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 2.5px 8px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  max-height: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  z-index: 3;

  &.active {
    max-height: 1000px;
    transition: max-height 0.5s ease-in;
  }

  &.sidebar__city-selector__dropdown {
    top: 37px;
    left: 25px;
    width: calc(100% - 25px);
  }

  @media only screen and (max-width: 600px) {
    &:not(&.sidebar__city-selector__dropdown) {
      width: 200px;
    }
  }

  @media only screen and (max-width: 450px) {
    &:not(&.sidebar__city-selector__dropdown) {
      width: 120px;
    }
  }
`;

export const DropdownItem = styled.div`
  padding: 7px 10px;
  font-family: Montserrat;
  font-size: 11px;
  line-height: 1.23;
  cursor: pointer;

  &:hover {
    background-color: #bfbfbf;
  }

  &:first-of-type {
    border-radius: 4px 4px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 4px 4px;
  }
`;
