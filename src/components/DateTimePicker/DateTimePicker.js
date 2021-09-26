import React, { useState } from "react";
import { Div} from "./DateTimePickerStyles";
import "./styles.css";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

// import the DatePicker
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
export default function DateTimePickerCustimzed({ ts, setTs }) {
  const dateValue = new Date();
  return (
    <div>
      <Div>
        <label className="format-label-tr">Departure</label>
        <DatePickerComponent id="datepicker" format="dd-MMM-yy" start="Decade" value={dateValue} placeholder="Select a date " />
      </Div>

      <Div>
        <label className="format-label-tr">Departure</label>
        <TimePickerComponent id="timepicker" value={dateValue} placeholder="Select a Time" />
      </Div>

    </div>
  );
}
