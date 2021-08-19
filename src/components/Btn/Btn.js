import React from "react";
import {BtnWrapper} from "./BtnStyles";

const Btn = ({disabled, variant, onClick, text, className}) => {
    return (
        <BtnWrapper className={className} disabled={disabled} onClick={onClick}>
            {text}
        </BtnWrapper>
    );
}

export default Btn;