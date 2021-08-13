import React, { useState } from "react";
import { Div, StyledTextField } from "./DateTimePickerStyles";
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles';

export default function DateTimePickerCustimzed({ ts, setTs }) {
  const [timestampUTC, setTimestampUTC] = useState(ts);
  const [isOpen, setIsOpen] = useState(false);
  const currentDate = new Date(parseInt(timestampUTC));
  let currentMonth = currentDate.getMonth().length === 1 ? currentDate.getMonth() : "0" + currentDate.getMonth();

  const setTimeStamp = (date) => {
    const ts = new Date(date).getTime();
    setTimestampUTC(ts);
    setTs(ts);
  };

  const renderTextField = (props) => (
    <StyledTextField
        {...props}
        label="Departure"
        readOnly={true}
    />
  );

  const StyledDateTimePicker = styled(DateTimePicker)(({ theme }) => ({
    '& .MuiPickersDay-root': {
        '&.Mui-selected': {
            backgroundColor: "#333"
        }
    },
  }));

  const customTheme = createTheme({
    overrides: {
        MuiPickersBasePicker:{
            pickerView:{
                backgroundColor:"black"
            }
        },
        MuiPickersDay: {
            day: {
                color: "light-gray",
                fontFamily: "\"Do Hyeon\", sans-serif",
                backgroundColor: "white",
                borderRadius:"0px",
            },
            container:{
                backgroundColor:"black"
            },
            daySelected: {
                backgroundColor: "#333",
                color:"light-gray"
            },
            dayDisabled: {
                color: "black",
            },
            current: {
                color: "#333",
            },
        },
    },
});

  return (
    <Div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={customTheme}>
            <StyledDateTimePicker
            value={`${currentDate.getFullYear()}-${currentMonth}-${currentDate.getDate()}T${currentDate.getHours()}:${currentDate.getMinutes()}`}
            onChange={(date) => {
                setTimeStamp(date)
                }}
            renderInput={(params) => renderTextField(params)}
            OpenPickerButtonProps={{
                onClick: () => {
                setIsOpen(!isOpen);
                }
            }}
            PopperProps={{
                onClose: () => {
                    setIsOpen(!isOpen);
                },
                sx: {
                    color: "#05bbd6"
                }
            }}
            DialogProps={{
                onClose: () => {
                setIsOpen(!isOpen);
                },
                sx: {
                    color: "#05bbd6"
                }
            }}
            InputProps={{
                onClick: () => {
                setIsOpen(!isOpen);
                },
                disabled: true
            }}
            open={isOpen}
            />
        </ThemeProvider>
      </LocalizationProvider>
    </Div>
  );
}
