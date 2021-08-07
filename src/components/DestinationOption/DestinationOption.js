import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  Icon,
  DropDownHolder,
  DropDownDisplay,
  Indicator,
  Destination,
  FormHeader,
  ExtraOptions,
  OptionLabel,
  AddDecrease,
  FormCount,
  FormButton,
  FormAssist,
} from "./DestinationOptionStyle";
import DropDownOption from "../DropDownOption/DropDownOption";
const DestinationOption = () => {
  const [passengerCount, setPassengerCount] = useState(1);
  const [luggaeCount, setLuggaeCount] = useState(0);

  return (
    <div className="container" style={{ background: "#f6f6f6" }}>
      <FormHeader>what is your next destination</FormHeader>
      {/* FROM */}
      <DropDownOption
        icon="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/5b813415-ead5-4971-9b52-d5e9fc82cd0d.svg"
        title={"From"}
        type="land"
      />
      {/* TO */}
      <DropDownOption
        icon="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/a07566f2-d367-480d-a59d-6890484d1381.svg"
        title={"to"}
        type="land"
      />

      {/* Departure Date*/}
      <DropDownOption
        icon="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/2d3adfc2-c45b-45b9-bbc4-7dd931d73d5f.svg"
        title={"Departure"}
        type="date"
      />

      {/* Extra option */}
      <ExtraOptions className="p-3">
        {/* Passenger */}

        {/* Luggage */}

        {/* <div className="d-flex align-items-center">
          <div className="d-flex  w-75">
            <Icon
              className="m-2"
              src="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/6f455cee-8e11-40b0-a059-e94b25993284.svg"
            />
            <OptionLabel>brining pets</OptionLabel>
          </div>
          <div className="d-flex  w-25 justify-content-evenly">
            <Form.Check type="switch" id="custom-switch" label="" />
          </div>
        </div> */}
      </ExtraOptions>
      <Button variant="primary w-100 round mt-3">Book Trip!</Button>
      <FormAssist>
        City Not Listed? <span>Contact us</span>
      </FormAssist>
    </div>
  );
};

export default DestinationOption;
