import React, { useState } from "react";
import { Div} from "./DateTimePickerStyles";
import "./styles.css";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

export default function DateTimePickerCustimzed({ ts, setTs }) {
  const dateValue = new Date();
  return (
    <Div>
      <label className="format-label-tr">Departure</label>
      <DateTimePickerComponent format="dd-MMM-yy HH:mm" value={dateValue} id="datetimepicker" placeholder="Select a date and time"/>
    </Div>
  );
}
