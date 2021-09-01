import React from "react";
import {MainWrapper} from "./ToolBarStyles";
import BackBtn from "../BackBtn/BackBtn"
import Btn from "../Btn/Btn"

const ToolBar = ({showBtn, btnVariant, btnOnClick, btnDisabled, btnText}) => {
    return (
        <MainWrapper>
            <BackBtn />
            {showBtn ? (
                <Btn
                    onClick={btnOnClick}
                    disabled={btnDisabled}
                    variant={btnVariant}
                    text={btnText}
                />
            ) : null}
        </MainWrapper>
    );
}

export default ToolBar;