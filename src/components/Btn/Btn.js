import React from "react";
import {BtnWrapper, BtnCancel} from "./BtnStyles";

const Btn = ({disabled, variant, onClick, text, className, style}) => {
    return (
        <>
            {variant === "cancel-btn" ? (
                <BtnCancel className={className} disabled={disabled} onClick={onClick}>
                    {text}
                </BtnCancel>
            ) : (
                <BtnWrapper className={className} disabled={disabled} onClick={() => onClick()} style={style}>
                    {text}
                </BtnWrapper>
            )}
        </>
    );
}

export default Btn;