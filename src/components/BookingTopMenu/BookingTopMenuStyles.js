import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12.8px 49.5px;
`;

export const Item = styled.span`
  height: auto;
  width: 200px;
  position: relative;
`;

export const Hide = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 760px) {
    &.item-btn {
      display: none;
    }
  }

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

export const Btn = styled.button`
  width: 115px;
  height: 29px;
  padding: 8px 18.6px 7.5px 18.5px;
  border-radius: 5px;
  background-color: rgba(132, 132, 132, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  outline: 0;
  border: none;
`;

export const BtnText = styled.span`
  width: 54px;
  margin: 0 16.5px 0 0;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.23;
  color: #000;
`;

export const BtnIcon = styled.div`
  width: 8.9px;
  height: 5.9px;
  line-height: 0;
`;
