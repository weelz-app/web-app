import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SelectedNumber = styled.span`
  margin: 4px 9.4px 4px 0;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  color: #000;
  width: 10px;

  .App.ar & {
    margin: 4px 0 4px 9.4px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57.3px;
  height: 20px;
  padding: 0 !important;
  border-radius: 4px;
  background-color: #dfdfdf;
  direction: ltr !important;
`;

export const Btn = styled.span`
    height: 19px;
    width: 18px;
    line-height: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  &:hover {
    opacity: 0.7;
  }
`;

export const Bar = styled.span`
  width: 0.6px;
  height: 8.1px;
  margin: 1.5px 8.6px 0.9px 10.1px;
  border-radius: 0.2px;
  background-color: rgba(60, 60, 67, 0.18);
`;
