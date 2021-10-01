import React, { useState } from "react";
import { Div} from "./DateTimePickerStyles";
import "./styles.css";

import { Container, Row, Col } from "react-bootstrap";

// import the DatePicker
import { DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';

export default function DateTimePickerCustimzed({ ts, setTs, col = 12}) {
  const dateValue = new Date();
  const timeValue = new Date();
  const colDiv = col;
  timeValue.setHours(timeValue.getHours() + 1).toLocaleString('en-US', { hour: 'numeric', hour12: true });
 
  return (
    <div>
      <Row>
        <Col lg={colDiv}>
          <Div>
            <label className="format-label-tr">Departure</label>
            <DatePickerComponent id="datepicker" format="dd-MMM-yy" start="Day" value={dateValue} placeholder="Select a date " />
          </Div>
        </Col>

        <Col lg={colDiv}>
          <Div>
            <label className="format-label-tr">Departure</label>
            <TimePickerComponent id="timepicker" value={timeValue}  placeholder="Select a Time" format={'HH a'} step="60" />
          </Div>
        </Col>
      </Row>
    </div>
  );
}
