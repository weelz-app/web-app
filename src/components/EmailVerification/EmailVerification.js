import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import config from '../../config.json'
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';

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
import { setUserAuthToken } from '../../utils';

const results = {
    VALID: 'valid',
    INVALID: 'invalid',
    EXPIRED: 'expired',
    UNKNOWN: 'unknown',
    TOOMANY: 'too many attempts'
}

export default function EmailVerification() {
    let VERIFY_API = `${config.API_BASE_URL}/verify`
    const history = useHistory()
    let location = useLocation()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [code, setCode] = useState('')

    if (!location.state || !location.state[0] || !location.state[0].uid) {
        history.push('/')
    }

    const submit = useCallback(() => {
        setError('')
        let uid = location.state[0].uid
        let name = location.state[0].name
        setLoading(true)
        fetch(VERIFY_API + `?uid=${uid}&code=${code}`)
            .then(response => response.json())
            .then(r => {
                console.log(r)
                if (!r.error && r.codeValidation === results.VALID) {
                    setUserAuthToken(r.token)
                    window.sessionStorage.setItem('uid', uid)
                    window.sessionStorage.setItem('user-name', name)
                    history.push('/')
                } else {
                    setLoading(false)
                    setError(
                        r.error
                            ? r.message
                            : r.codeValidation +
                            ', ' +
                            r.remainingAttempts +
                            ' attempts remaining'
                    )
                }
            })
    }, [code, history, location.state])

    useEffect(() => {
        if (code && code.length === 4 && !error) submit()
        if (!location || !location.state) history.push('/signIn')
    }, [error, code, submit])



    const renderer = ({ minutes, seconds }) => (
        <TimeLeft>
            {zeroPad(minutes)}:{zeroPad(seconds)}
        </TimeLeft>
    );

    const getVal = (e) => {
        setError('')
        setCode(e ? e : code)
    }

    return (
        <MainWrapper>
            <PhoneWrapper>
                <Overlay />
                <PhoneIcon src={VerificationIcon} />
                <div>
                    <Title>Verify Your Mobile Number</Title>
                    <Text>A verification code has been sent to <Number>{location?.state ? location?.state[0]?.phone : ''}</Number></Text>
                </div>
            </PhoneWrapper>
            <div>
                <Label>Enter the Verification Code</Label>
                <FormGroup>
                    <VerificationInputStyled
                        // value={code}
                        length={4}
                        validChars="0-9"
                        autoFocus={true}
                        onChange={getVal}
                        placeholder=""
                        removeDefaultStyles
                        classNames={{
                            container: "container",
                            character: "character",
                            characterInactive: "character--inactive",
                            characterSelected: "character--selected",
                        }}
                    />
                </FormGroup>

            </div>
            <div style={{ marginBottom: "20px" }}>
                {error && <Alert severity="error">{error}</Alert>}
                {loading && <LinearProgress />}
            </div>
            <Btn
                onClick={(e) => submit(e)}
                disabled={error}
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
