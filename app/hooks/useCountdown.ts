import { useState, useEffect } from "react";

type CountdownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function useCountdown(targetDate: Date) {
  const [remainingTime, setRemainingTime] = useState<CountdownProps>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = targetDate.getTime() - now.getTime();
      if (timeLeft <= 0) {
        clearInterval(interval);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return remainingTime;
}

export default useCountdown;
