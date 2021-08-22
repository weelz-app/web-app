import styled from "styled-components";
import ErrorIcon from '@material-ui/icons/Error';
import CancelIcon from '@material-ui/icons/Cancel';

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
    background-color: ${({color}) => color};
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
    color: ${({color}) => color};
    position: relative;
`;

export const StatusIcon = styled.img`
    width: 11px;
    height: 11px;
    margin: 0 5px 0 0;
    object-fit: contain;
`;

export const StyledErrorIcon = styled(ErrorIcon)`
    margin: 0 5px 0 0;

    &.MuiSvgIcon-root {
      width: 11px;
      height: 11px;
    }
`;

export const StyledCancelIcon = styled(CancelIcon)`
    margin: 0 5px 0 0;
    
    &.MuiSvgIcon-root {
      width: 11px;
      height: 11px;
    }
`;
