import React, { useState } from "react";
import {
  Div,
  SelectedNumber,
  ButtonsWrapper,
  Btn,
  Bar
} from "./NumberSelectorStyles";
export default function NumberSelector({ value, max, min, valueUpdated }) {
  const [slecetedValue, setSlecetedValue] = useState(value);

  const incrementValue = () => {
    const newVal =
      slecetedValue !== parseInt(max)
        ? parseInt(slecetedValue) + 1
        : slecetedValue;
    setSlecetedValue(newVal);
    valueUpdated(newVal);
  };

  const decrementValue = () => {
    const newVal =
      slecetedValue !== parseInt(min)
        ? parseInt(slecetedValue) - 1
        : slecetedValue;
    setSlecetedValue(newVal);
    valueUpdated(newVal);
  };

  return (
    <Div>
      <SelectedNumber>{slecetedValue}</SelectedNumber>
      <ButtonsWrapper>
        <Btn onClick={() => decrementValue()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="minus"
            className="svg-inline--fa fa-minus fa-w-14"
            role="img"
            width="10"
            height="10"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
        </Btn>
        <Bar />
        <Btn onClick={() => incrementValue()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            className="svg-inline--fa fa-plus fa-w-14"
            role="img"
            width="10"
            height="10"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
        </Btn>
      </ButtonsWrapper>
    </Div>
  );
}
