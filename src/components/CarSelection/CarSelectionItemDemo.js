import CarSelectionItem from "./CarSelectionItem";

export default function CarSelectionItemDemo() {
  let carOption = {
    type: "standard",
    description: "Hyundai Elantra",
    price: "50",
    currency: "EGP",
    originalPrice: "60",
    img: "https://s3.eu-central-1.amazonaws.com/images.weelz.app/elantra.png"
  };
  return <CarSelectionItem carOption={carOption} />;
}
