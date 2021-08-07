import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import {
  Icon,
  OptionLabel,
  FormCount,
  AddDecrease,
} from "../DestinationOption/DestinationOptionStyle";
const ExtraOption = ({ title, icon, state, type }) => {
  const [currentState, setCurrentState] = useState();
  useEffect(() => {
    if (state)
      setCurrentState({ state });
    else
      setCurrentState(0);

    return () => { };
  }, []);
  return (
    <div>
      <div className="d-flex align-items-center border">
        <div className="d-flex  flex-grow-1">
          <Icon className="m-2" src={icon ? icon : "https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/c7cb5904-7d55-40f9-997e-d8ad65f0549d.svg"} />
          <OptionLabel>{title ? title : "Something"}</OptionLabel>
        </div>

        {type ? (
          <div className="d-flex  w-25 justify-content-evenly">
            <FormCount>{currentState}</FormCount>
            <AddDecrease className=" w-75 justify-content-evenly d-flex ">
              <span
                className=" w-100 text-center"
                onClick={() => setCurrentState(currentState + 1)}
              >
                +
              </span>
              <span>|</span>
              <span
                className=" w-100 text-center"
                onClick={() => {
                  if (currentState <= 1) return;
                  setCurrentState(currentState - 1);
                }}
              >
                -
              </span>
            </AddDecrease>
          </div>
        ) : <Form.Check className="" type="switch" id="custom-switch" label="" />
        }

      </div>
    </div>
  );
};

export default ExtraOption;
