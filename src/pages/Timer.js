import React, {useState} from "react";


import '../styles/TimerStyles.css'


const Timer = () => {
    const [time, setTime] = useState(0)
    const [timeStopped, setTimeStopped] = useState (true)
    const handleStart = () => {
        setTimeStopped(false)
        
    }
    const handleStop =() => {
        setTimeStopped(true)
    }
    const handleReset = () => {
        setTime(0)
    }
    console.log(timeStopped)
    return (
        <div className="timer-wrapper">
            <div className="time">{time}</div>
            <div className="btn-wrapper">
                <button className="start" onClick={handleStart}>Start</button>
                <button className="stop" onClick={handleStop}>Stop</button>
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>

        </div>
    )
}

export default Timer