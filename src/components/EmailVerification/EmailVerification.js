import React, {useState, useEffect, useCallback} from 'react';
import {
    MainWrapper,
    PhoneWrapper,
    PhoneIcon,
    Title,
    Text,
    Number,
    FormGroup,
    Label,
    VerificationInputStyled,
    Overlay,
    ResendWrapper,
    Resend,
    TimeLeft
} from "./EmailVerificationStyles"
import Btn from "../Btn/Btn"
import VerificationIcon from "../../icons/verification.png";
import Countdown, { zeroPad } from 'react-countdown';

export default function EmailVerification() {
    const [code, setCode] = useState("");
    const [isValid, setIsValid] = useState(false);

    const codeValidation = useCallback(() => {
        let isValid = false;
        if (code !== "" && code.length === 4) {
            isValid = true
        }

        setIsValid(isValid)
    }, [code])

    useEffect(() => {
        codeValidation()
    }, [code, codeValidation]);

    const submit = (e) => {
        codeValidation()
        console.log("Verified")
    }

    const renderer = ({ minutes, seconds }) => (
        <TimeLeft>
            {zeroPad(minutes)}:{zeroPad(seconds)}
        </TimeLeft>
    );

    return (
        <MainWrapper>
            <PhoneWrapper>
                <Overlay />
                <PhoneIcon src={VerificationIcon} />
                <div>
                    <Title>Verify Mobile <br /> Number</Title>
                    <Text>a verification code has been sent to <Number>+201xxxxxxxxx</Number></Text>
                </div>
            </PhoneWrapper>
            <div>
                <Label>Enter the Verification Code</Label>
                <FormGroup>
                    <VerificationInputStyled
                        value={code}
                        length={4}
                        validChars="0-9"
                        autoFocus={true}
                        onChange={(val) => setCode(val)}
                        placeholder=""
                        removeDefaultStyles
                        classNames={{
                            characterInactive: "character--inactive",
                            characterSelected: "character--selected",
                        }}
                    />
                </FormGroup>
            </div>
            <Btn
                onClick={(e) => submit(e)}
                disabled={!isValid ? true : false}
                text="Verify"
            />
            <ResendWrapper>
                <Resend>
                    Resend code?
                </Resend>
                <Countdown
                    date={Date.now() + 60000}
                    renderer={props => renderer(props)}
                />
            </ResendWrapper>
        </MainWrapper>
    )
}
