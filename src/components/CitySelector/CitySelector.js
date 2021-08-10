
import React, { useState } from "react"
import { Div } from "./CitySelectorStyles"
export default function CitySelector({ mode, cityList, selectedCity, setSelectedCity }) {
    const [city, setCity] = useState(selectedCity)
    return (<Div>
        <a href="https://app.zeplin.io/project/60ec51664e2cf5af3e45b394/screen/60ec550fa5400b0f15d91fb6"><img alt="design" src="https://s3.eu-central-1.amazonaws.com/storage.weelz.app/CitySelector2.png" />
        </a>

    </Div>
    )
}