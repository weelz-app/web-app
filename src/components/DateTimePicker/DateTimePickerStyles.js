import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const Div = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  & .MuiFormLabel-root {
    font-family: Montserrat;
    font-size: 9px;
    font-weight: 500;
    line-height: 1.22;
    color: #bfbfbf;
  }

  & .MuiInputBase-root {
    width: 100%;
    height: 13.5px;
    margin: 11px 0 0;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.23;
    color: #000;
    cursor: pointer;
  }

  & .MuiInput-underline:after,
  & .MuiInput-underline:before {
    display: none;
  }
`;