const RangeSlider = ({ min, max, value }) => {
  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      />
    </div>
  );
};

export default RangeSlider;
