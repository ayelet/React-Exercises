import React, { useState } from "react";

const TimeCalculator = () => {
  const [timeMin, setTimeMin] = useState(0);
  const [timeSec, setTimeSec] = useState(0);
  const [timeHour, setTimeHour] = useState(0);

  return (
    <div>
      <label htmlFor="sec">Seconds:</label>
      <input
        name="sec"
        type="number"
        value={timeSec}
        onChange={(e) => {
          setTimeSec(e.target.value);
          setTimeMin(e.target.value / 60);
          setTimeHour(e.target.value / 3600);
        }}
      />
      <label htmlFor="min">Minutes:</label>
      <input
        name="min"
        type="number"
        value={timeMin}
        onChange={(e) => {
          setTimeMin(e.target.value);
          setTimeSec(e.target.value * 60);
          setTimeHour(e.target.value / 60);
        }}
      />
      <label htmlFor="hour">Hours:</label>
      <input
        name="hour"
        type="number"
        value={timeHour}
        onChange={(e) => {
          setTimeHour(e.target.value);
          setTimeMin(e.target.value * 60);
          setTimeSec(e.target.value * 3600);
        }}
      />
    </div>
  );
};

export default TimeCalculator;
