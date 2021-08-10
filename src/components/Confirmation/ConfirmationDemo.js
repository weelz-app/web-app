import Confirmation from "./Confirmation";

export default function ConfirmationDemo() {
  let confirmations = [
    {
      id: 1,
      type: "success",
      title: "Your request has been successfully submitted",
      message: "we will confirm your reservation via SMS shortly."
    },
    {
      id: 2,
      type: "error",
      title: "Something went wrong!",
      message: "Please try making a new reservation"
    },
    {
      id: 3,
      type: "info",
      title: "Title Test 1",
      message: "Message test 2 for the info type"
    },
    {
      id: 4,
      type: "yes_no",
      title: "Do you want to do that?",
      message: "Are you sure you want to do that thing?"
    }
  ];
  return <Confirmation options={confirmations[3]} />;
}
