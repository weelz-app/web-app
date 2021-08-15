import React from "react";
import {MainWrapper} from "./ToolBarStyles";
import BackBtn from "../BackBtn/BackBtn"
import Btn from "../Btn/Btn"

const ToolBar = (showBtn = true, btnVariant, btnOnClock) => {
    return (
        <MainWrapper>
            <BackBtn />
            {showBtn ? (
                <Btn onClick={btnOnClock} variant={btnVariant} />
            ) : null}
        </MainWrapper>
    );
}

export default ToolBar;