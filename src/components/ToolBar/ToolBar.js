import React from "react";
import {MainWrapper} from "./ToolBarStyles";
import BackBtn from "../BackBtn/BackBtn"
import Btn from "../Btn/Btn"

const ToolBar = ({showBtn, btnVariant, btnOnClock, btnDisabled, btnText}) => {
    return (
        <MainWrapper>
            <BackBtn />
            {showBtn ? (
                <Btn
                    onClick={btnOnClock}
                    disabled={btnDisabled}
                    variant={btnVariant}
                    text={btnText}
                />
            ) : null}
        </MainWrapper>
    );
}

export default ToolBar;