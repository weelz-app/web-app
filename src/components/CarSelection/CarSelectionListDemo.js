import CarSelectionList from "./CarSelectionList";

export default function CarSelectionItemDemo() {
  let carOptions = [
    {
      id: 1,
      type: "standard",
      description: "Hyundai Elantra",
      price: "50",
      currency: "EGP",
      originalPrice: "60",
      img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
    },
    {
      id: 2,
      type: "premium",
      description: "Hyundai Elantra",
      price: "50",
      currency: "EGP",
      originalPrice: "60",
      img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
    },
    {
      id: 3,
      type: "premium",
      description: "Hyundai Elantra",
      price: "50",
      currency: "EGP",
      originalPrice: "60",
      img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
    },
    {
      id: 4,
      type: "premium",
      description: "Hyundai Elantra",
      price: "50",
      currency: "EGP",
      originalPrice: "60",
      img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
    }
  ];
  return <CarSelectionList carOptions={[]} />;
}
