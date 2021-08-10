
import React, { useState } from "react"
import { Div } from "./DateTimePickerStyles"
export default function DateTimePicker({ ts, setTs }) {
    const [timestampUTC, setTimestampUTC] = useState(216489754)
    return (<Div>
        <a href="https://material-ui.com/components/pickers/"><img alt="design" src="https://s3.eu-central-1.amazonaws.com/storage.weelz.app/DateTimePicker.png" />
        </a>

    </Div>
    )
}