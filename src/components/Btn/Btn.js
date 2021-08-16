import React from "react";
import {BtnWrapper} from "./BtnStyles";

const Btn = ({disabled, variant, onClick, text}) => {
    return (
        <BtnWrapper disabled={disabled} onClick={onClick}>
            {text}
        </BtnWrapper>
    );
}

export default Btn;