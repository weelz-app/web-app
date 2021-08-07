import React from "react";
import {
  DropDownHolder,
  Icon,
  DropDownDisplay,
  Indicator,
  Destination,
} from "../DestinationOption/DestinationOptionStyle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const DropDownOption = ({ icon, title, type }) => {

  return (
    <DropDownHolder className=" d-flex align-items-center justify-content-between ">
      <div className="d-flex align-items-center   w-100">
        <Icon className="d-flex m-2 align-items-center" src={icon} />
        <DropDownDisplay className="d-flex justify-content-start flex-grow-1  flex-column w-75">
          <Indicator className="">{title}</Indicator>
          <Destination className="">{type}</Destination>
        </DropDownDisplay>
        <ArrowDropDownIcon className="" />
      </div>
    </DropDownHolder>

  );
}


export default DropDownOption;
