import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import DropDownOption from '../DropDownOption/DropDownOption'
const NavExtension = () => {
    return (
        <div className="d-flex flex-row">
            <DropDownOption title={"from"} type={"Cairo"} icon={"https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/13f50147-f323-452e-b323-245afd1c9b9e.svg"} />
            <DropDownOption title={"to"} type={"Alexandria"} icon={"https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/0869e448-1167-4ff3-b251-81d1d11923e8.svg"} />
            <DropDownOption title={"Departure"} type={"10May,2021-10:15Pm"} icon={"https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/1db56bd5-c050-402e-a136-6f6661aae887.svg"} />
            <DropdownButton id="dropdown-button-dark-example1" variant="secondary" title="More Info" >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

        </div>
    )
}

export default NavExtension
