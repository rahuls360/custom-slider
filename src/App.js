import "./styles.css";
import RangeSlider from "./RangeSlider";

export default function App() {
  return (
    <div className="App">
      <RangeSlider min={200} max={1000} value={300} />
    </div>
  );
}
