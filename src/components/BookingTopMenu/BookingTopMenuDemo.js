import BookingTopMenu from "./BookingTopMenu";
let b = {
  from: "Alex",
  to: "Cairo",
  ts: "1628806200960",
  passengers: 10,
  luggage: 9,
  pets: false,
  nonSmoking: true
};
export default function BookingTopMenuDemo() {
  return (
    <div>
      <BookingTopMenu b={b} />
    </div>
  );
}
