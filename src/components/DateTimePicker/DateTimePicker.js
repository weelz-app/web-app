import React, { useState } from "react";
import { Div, StyledTextField } from "./DateTimePickerStyles";
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@material-ui/core/styles';
import "./styles.css";

export default function DateTimePickerCustimzed({ ts, setTs }) {
  const [timestampUTC, setTimestampUTC] = useState(ts);
  const [isOpen, setIsOpen] = useState(false);
  const currentDate = new Date(parseInt(timestampUTC));
  let currentMonth = currentDate.getMonth() + 1;
  currentMonth = currentMonth.toString().length === 2 ? currentMonth : "0" + currentMonth;
  const currentHours = currentDate.getHours() === 0 ? 12 : currentDate.getHours();
  const currentMinutes = currentDate.getMinutes().toString().length === 2 ? currentDate.getMinutes() : "0" + currentDate.getMinutes();

  const setTimeStamp = (date) => {
    const ts = new Date(date).getTime();
    setTimestampUTC(ts);
    setTs(ts);
  };

  const renderTextField = (props) => (
    <StyledTextField
        {...props}
        label="Departure"
        value={`${currentMonth}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentHours}:${currentMinutes} ${currentDate.getHours() >= 12 ? 'pm' : 'am'}`}
        onChange={(e) => console.log(e.target)}
    />
  );

  const customTheme = createTheme({
    palette: {
        primary: {
          main: "#05bbd6",
          contrastText: '#fff',
        }
    }
});

  return (
    <Div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={customTheme}>
                <DateTimePicker
                    value={currentDate}
                    ampm={true}
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
                        id: "calander"
                    }}
                    DialogProps={{
                        onClose: () => {
                            setIsOpen(!isOpen);
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
        </StyledEngineProvider>
      </LocalizationProvider>
    </Div>
  );
}
