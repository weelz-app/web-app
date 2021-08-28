import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
    MainWrapper,
    Title,
    Text,
    FormGroup,
    Label,
    Input,
    PhoneWrapper,
    PhoneText,
    PhoneIcon
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
                    <PhoneWrapper>
                        <PhoneIcon src={EgyptIcon} />
                        <PhoneText>+20</PhoneText>
                    </PhoneWrapper>
                    <Input
                        placeholder="123456789"
                        value={phone}
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                    />
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
            <div style={{marginBottom: "20px"}}>
                <FormControlLabel
                    label="Remember me"
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
