import React from "react";

function Time() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return <span>{time.toLocaleTimeString()} </span>;
}

export default Time;
