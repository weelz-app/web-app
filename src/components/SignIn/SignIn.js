import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import config from '../../config.json'
import {
    MainWrapper,
    Title,
    Text,
    FormGroup,
    Label,
    Input,
    PhoneWrapper,
    PhoneText,
    PhoneIcon,
    StyledFormControlLabel
} from "./SignInStyles"
import EgyptIcon from "../../icons/egypt.png";
import Btn from "../Btn/Btn"
import { width } from 'dom-helpers';

export default function SignIn() {
    let SIGNUP_API = `${config.API_BASE_URL}/signup`
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [checked, setChecked] = useState(false);

    const submit = (e) => {
        setLoading(true)

        fetch(SIGNUP_API + `?phone=${encodeURIComponent(phone)}&name=${name}`)
            .then(response => response.json())
            .then(r => {
                console.log(r)
                r.message ? setError(r.message) : setError(null)
                if (!r.message)
                    history.push({
                        pathname: '/verify',
                        state: [{ uid: r.uid, name: name, phone: phone }]
                    })
                else {
                    setLoading(false)
                }
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    return (
        <MainWrapper>
            <Title>Private Car With <br /> Your Driver</Title>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</Text>
            <div>
                <Label>Phone Number</Label>
                <FormGroup>
                    <PhoneInput
                        onChange={e => setPhone(e.startsWith('+') ? e : `+${e}`)}
                        country={'eg'} />
                </FormGroup>
            </div>
            <div>
                <Label>Name</Label>
                <FormGroup>
                    <Input

                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormGroup>
            </div>

            <div style={{ marginBottom: "20px" }}>

                <StyledFormControlLabel
                    label={<>I agree to the  <a href="https://weelz.app/terms" target="_blank"> terms and conditions </a></>}
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: "13px !important"
                        },
                        color: "#00c3e1"
                    }}
                    control={
                        <Checkbox
                            onChange={() => setChecked(!checked)}
                            checked={checked}
                            sx={{
                                color: "#00c3e1",
                                '&.Mui-checked': {
                                    color: "#00c3e1",
                                }
                            }}
                        />
                    }
                />

            </div>
            <div style={{ marginBottom: "20px" }}>
                {error && <Alert severity="error">{error}</Alert>}
                {loading && <LinearProgress />}
            </div>

            <Btn
                disabled={loading || !phone || !name || !checked}
                onClick={(e) => submit(e)}
                text="Sign In"
            />
        </MainWrapper>
    )
}
