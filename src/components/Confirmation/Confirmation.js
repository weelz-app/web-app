import React from "react";
import {
  ConfirmationWrapper,
  ConfirmationModal,
  ConfirmationOuterIcon,
  ConfirmationInnerIcon,
  ConfirmationTitle,
  ConfirmationMessage,
  ConfirmationButton,
  ConfirmationCloseButton,
  ConfirmationButtonsWrapper
} from "./ConfirmationStyles";

export default function Confirmation({ options }) {
  return (
    <ConfirmationWrapper>
      <ConfirmationModal>
        <ConfirmationOuterIcon>
          <ConfirmationInnerIcon type={options.type}>
            {options.type === "success" ? (
              <svg
                version="1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
              >
                <polygon
                  fill="#4caf50"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                />
              </svg>
            ) : options.type === "error" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <g id="close">
                  <path
                    id="x"
                    fill="#ff0000"
                    d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"
                  />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="info"
                class="svg-inline--fa fa-info fa-w-6"
                role="img"
                width="48"
                height="48"
                viewBox="0 0 192 512"
              >
                <path
                  fill="#c19d10"
                  d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"
                />
              </svg>
            )}
          </ConfirmationInnerIcon>
        </ConfirmationOuterIcon>

        <ConfirmationCloseButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#999999"
            viewBox="0 0 24 24"
          >
            <path
              fill="#999999"
              d="M7.05022 7.05028C6.65969 7.4408 6.65969 8.07397 7.05022 8.46449L10.5858 12L7.05023 15.5356C6.6597 15.9261 6.6597 16.5593 7.05023 16.9498C7.44075 17.3403 8.07392 17.3403 8.46444 16.9498L12 13.4142L15.5355 16.9498C15.926 17.3403 16.5592 17.3403 16.9497 16.9498C17.3402 16.5592 17.3402 15.9261 16.9497 15.5356L13.4142 12L16.9497 8.46449C17.3402 8.07397 17.3402 7.4408 16.9497 7.05028C16.5592 6.65976 15.926 6.65976 15.5355 7.05028L12 10.5858L8.46443 7.05028C8.07391 6.65975 7.44074 6.65975 7.05022 7.05028Z"
            />
          </svg>
        </ConfirmationCloseButton>

        <ConfirmationTitle type={options.type}>
          {options.title}
        </ConfirmationTitle>
        <ConfirmationMessage type={options.type}>
          {options.message}
        </ConfirmationMessage>
        {options.type !== "yes_no" ? (
          <ConfirmationButton>OK</ConfirmationButton>
        ) : (
          <ConfirmationButtonsWrapper>
            <ConfirmationButton>YES</ConfirmationButton>
            <ConfirmationButton>NO</ConfirmationButton>
          </ConfirmationButtonsWrapper>
        )}
      </ConfirmationModal>
    </ConfirmationWrapper>
  );
}
