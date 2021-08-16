import CitySelector from "./CitySelector";
let mode = "from";
let cityList = ["Alex", "Cairo", "Other"];
let selectedCity = "Alex";
let setSelectedCity = () => console.log();
export default function CitySelectorDemo() {
  return (
    <div>
      <CitySelector
        mode={mode}
        cityList={cityList}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
    </div>
  );
}
