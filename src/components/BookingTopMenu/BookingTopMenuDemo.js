import BookingTopMenu from "./BookingTopMenu";
let b = '{from: "Alex", to: "Cairo", passengers: 10, luggage: 20}';
export default function BookingTopMenuDemo() {
  return (
    <div>
      <BookingTopMenu b={b} />
    </div>
  );
}
