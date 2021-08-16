import NumberSelector from "./NumberSelector";
let value = "0";
let max = "10";
let min = "0";
let valueUpdated = () => console.log();
export default function NumberSelectorDemo() {
  return (
    <div>
      <NumberSelector
        value={value}
        max={max}
        min={min}
        valueUpdated={valueUpdated}
      />
    </div>
  );
}
