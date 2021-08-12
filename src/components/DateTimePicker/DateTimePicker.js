import React, { useState } from "react";
import { Div, StyledTextField } from "./DateTimePickerStyles";
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker';

export default function DateTimePicker({ ts, setTs }) {
  const [timestampUTC, setTimestampUTC] = useState(ts);
  const currentDate = new Date(parseInt(timestampUTC));
  let currentMonth = currentDate.getMonth().length === 1 ? currentDate.getMonth() : "0" + currentDate.getMonth();

  const setTimeStamp = (e) => {
    const ts = new Date(e.target.value).getTime();
    setTimestampUTC(ts);
    setTs(ts);
  };

  return (
    <Div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateTimePicker
          value={`${currentDate.getFullYear()}-${currentMonth}-${currentDate.getDate()}T${currentDate.getHours()}:${currentDate.getMinutes()}`}
          onChange={(e) => setTimeStamp(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Div>
  );
}
