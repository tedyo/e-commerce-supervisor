import React, { useEffect, useRef, useState } from "react";
import "./timer.scss";
import Countdown, { zeroPad, type CountdownRendererFn } from "react-countdown";

type Props = {
  setTimerCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};
const Timer = ({ setTimerCompleted }: Props) => {
  const [currentMilliseconds, setCurrentMilliseconds] = useState(
    Date.now() + 60000
  ); //1 min
  const countdownRef = useRef<Countdown | null>(null);
  const onComplete = () => {
    setTimerCompleted(true);
  };
  const renderer: CountdownRendererFn = ({ minutes, seconds }) => (
    <span className="countdown-placeholder">
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );

  return (
    <div className="timer">
      <Countdown
        ref={countdownRef}
        date={currentMilliseconds} //1 min
        renderer={renderer}
        intervalDelay={1000}
        controlled={false}
        autoStart={true}
        onComplete={onComplete}
      />
    </div>
  );
};

export default Timer;
