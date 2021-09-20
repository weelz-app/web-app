import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
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

export default function SignIn() {
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [checked, setChecked] = useState(false);

    const submit = (e) => {
        console.log("Submited")
    }

    return (
        <MainWrapper>
            <Title>Private Car With <br /> Your Driver</Title>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</Text>
            <div>
                <Label>Phone Number</Label>
                <FormGroup>
                    <PhoneInput
                        country={'eg'} />
                </FormGroup>
            </div>
            <div>
                <Label>Username</Label>
                <FormGroup>
                    <Input
                        placeholder="Moazelramsisy"
                        value={username}
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <StyledFormControlLabel
                    label="I agree to the terms and conditions"
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
            <Btn
                onClick={(e) => submit(e)}
                text="Sign In"
            />
        </MainWrapper>
    )
}
