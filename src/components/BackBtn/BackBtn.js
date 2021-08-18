import React from "react";
import {
    MainWrapper,
    Icon,
    Text
  } from "./BackBtnStyles";

const BackBtn = () => {
    return (
        <MainWrapper>
            <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="23.8" height="15.1" viewBox="0 0 52.462 35.814">
                    <g id="Group_579" transform="translate(2.828 2.828)">
                        <path fill="none" stroke="gray" stroke-linecap="round" strokeWidth="4px" id="Path_1305" d="M-12012.976-9225.811h-45" transform="translate(12060.609 9240.508)"/>
                        <path fill="none" stroke="gray" stroke-linecap="round" strokeWidth="4px" id="Path_1306" d="M-12022.309-9232.557l-15.076 15.082 15.076 15.076" transform="translate(12037.385 9232.557)"/>
                    </g>
                </svg>
            </Icon>
            <Text>
                Back
            </Text>
        </MainWrapper>
    );
}

export default BackBtn;