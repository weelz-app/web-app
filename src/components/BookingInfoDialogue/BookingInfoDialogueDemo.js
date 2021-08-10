
import BookingInfoDialogue from "./BookingInfoDialogue"
let booking = { from: "Alex", to: "Cairo", ts: "1628605559", passengers: 4, luggage: 2, pets: false, nonSmoking: true }
let bookingUpdated = () => console.log()
export default function BookingInfoDialogueDemo() {
    return (<div>
        <BookingInfoDialogue booking={booking} bookingUpdated={bookingUpdated} />
    </div>
    )
}