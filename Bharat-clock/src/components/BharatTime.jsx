import { useEffect } from "react";
import { useState } from "react";

function BharatTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cancelled interval");
    };
  }, []);
  return (
    <p>
      This is the current time: {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default BharatTime;
