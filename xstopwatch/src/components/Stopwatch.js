import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [isRunning, setRunning] = useState(false);
  const [timer,setTimer] = useState(0);
  const timerId = useRef(null);
  const handleTimer = ()=>{
    if(!isRunning){
        timerId.current = setInterval(()=>{
            setTimer((prev)=>prev+1);
        },1000);
        setRunning(true);
    }
    else{
        clearInterval(timerId.current);
        setRunning(false);
    }
  }
  const resetTimer = ()=>{
    clearInterval(timerId.current);
    setTimer(0);
    setRunning(false);
  }
  const formatTimer = ()=>{
    const min = Math.floor(timer/60);
    const sec = timer%60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTimer()}</p>
      <button onClick={handleTimer}>
        {isRunning ? 'Stop':'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
