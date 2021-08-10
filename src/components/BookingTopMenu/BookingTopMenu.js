
import React, { useState } from "react"
import { Div } from "./BookingTopMenuStyles"
export default function BookingTopMenu({ b }) {
    const [booking, setBooking] = useState(b)
    return (<Div>
        <a href="https://app.zeplin.io/project/60ec51664e2cf5af3e45b394/screen/60ec550fa5400b0f15d91fb6"><img alt="design" src="https://s3.eu-central-1.amazonaws.com/storage.weelz.app/BookingTopBar.png" />
        </a>

    </Div>
    )
}