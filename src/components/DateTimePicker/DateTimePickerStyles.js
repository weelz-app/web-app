import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 58px;
  position: relative;
  margin-bottom: 13.5px;
  box-shadow: 0 2.5px 8px 0 rgb(0 0 0 / 5%);
  background-color: #fff;
  padding: 6px 45px;
  border-radius: 5px;
    .format-label-tr{
      font-family: Montserrat;
      font-size: 9px;
      font-weight: 500;
      line-height: 1.22;
      color: #bfbfbf;
    }
    .e-input-group{
      width: 100%;
      margin: 0 !IMPORTANT;
      border: none !important;
      position: static !IMPORTANT;
      &:before, &:after{
        display: none !important
      }
      .e-clear-icon{
        display: none !important
      }
      .e-datetimepicker{
        padding: 0 !IMPORTANT;
        order: 3;
        font-family: Montserrat !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        color: #000 !important;
      }
      .e-date-icon{
        position: absolute;
        width: 20px;
        height: 20px;
        color: #00c3e1 !important;
        margin: 0 !important;
        border: none !important;
        left: 11px;
        top: 9px;
        font-size: 20px;
        display: block;
      }
      .e-time-icon{
        position: absolute;
        width: 20px;
        height: 20px;
        color: #00c3e1 !important;
        margin: 0 !important;
        border: none !important;
        left: 13px;
        top: 11px;
        font-size: 19px !important;
        display: block;
        min-width: auto !important;
        min-height: auto !IMPORTANT;
      }
      .e-datepicker, .e-timepicker{
        height: 18px !important;
        min-height: auto !important;
        padding: 0 !important;
        display: block;
        margin-top: 1px;
        font-family: Montserrat;
        font-size: 11px;
        font-weight: 600;
        line-height: 1.23;
        color: #000;
      }
    }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  & .MuiInputBase-root {
    width: 100%;
    height: 13.5px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.23;
    color: #000;
  }

  & .MuiInputBase-input {
    cursor: pointer;

    &.Mui-disabled {
      -webkit-text-fill-color: unset;
    }
  }

  & .MuiOutlinedInput-notchedOutline {
    border: 0;
  }

  & .MuiInput-underline:after,
  & .MuiInput-underline:before {
    display: none;
  }

  .App.ar & .MuiFormLabel-root {
    left: unset;
    right: 15px;
  }

  .App.ar & .MuiInputBase-root {
    padding-right: 0;
  }

  .App.ar & .MuiInputBase-input {
    direction: ltr;
    text-align: right;
    padding-right: 14px;
    padding-left: 0;
  }

  .App.ar & .MuiInputAdornment-root {
    margin-left: 0;
    margin-right: 8px;
  }
`;