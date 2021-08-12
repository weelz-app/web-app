import React, { useState } from "react";
import { Div, StyledTextField } from "./DateTimePickerStyles";

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
      <StyledTextField
        id="datetime-local"
        label="Departure"
        type="datetime-local"
        defaultValue={`${currentDate.getFullYear()}-${currentMonth}-${currentDate.getDate()}T${currentDate.getHours()}:${currentDate.getMinutes()}`}
        InputLabelProps={{
          shrink: true
        }}
        onChange={(e) => setTimeStamp(e)}
      />
    </Div>
  );
}
