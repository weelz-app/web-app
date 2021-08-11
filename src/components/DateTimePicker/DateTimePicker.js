import React, { useState } from "react";
import { Div, StyledTextField } from "./DateTimePickerStyles";

export default function DateTimePicker({ ts, setTs }) {
  const [timestampUTC, setTimestampUTC] = useState(ts);
  const currentDate = new Date(parseInt(timestampUTC));

  const setTimeStamp = (e) => {
    setTimestampUTC(new Date(e.target.value).getTime())
    setTs()
  }

  return (
    <Div>
      <StyledTextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue={`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}T${currentDate.getHours()}:${currentDate.getMinutes()}`}
        InputLabelProps={{
          shrink: true
        }}
        onChange={(e) => setTimeStamp(e)}
      />
    </Div>
  );
}
