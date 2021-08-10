
import DateTimePicker from "./DateTimePicker"
let ts = "216489754"
let setTs = () => console.log()
export default function DateTimePickerDemo() {
    return (<div>
        <DateTimePicker ts={ts} setTs={setTs} />
    </div>
    )
}