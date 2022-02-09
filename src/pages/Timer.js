import React, {useState, useEffect} from "react";


import '../styles/TimerStyles.css'


const Timer = () => {
    const [timerOn, setTimerOn] = useState (false);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);

    useEffect(()=>{
        let timerInterval
        if(timerOn){
             timerInterval = setInterval(()=>{
                if(milliseconds >=1000){
                    setSeconds(seconds +1)
                    setMilliseconds(0)
                }
                setMilliseconds(prev => prev + 10)
                
            },10)
        } else clearInterval(timerInterval)
        

        return () => clearInterval(timerInterval)
        
    },[timerOn,milliseconds])
    

    const handleReset = () => {
        setTimerOn(false)
        setSeconds(0)
        setMilliseconds(0)
    }

    return (
        <div className="timer-wrapper">
            <div className="time">{seconds}.{milliseconds}</div>
            <div className="btn-wrapper">
                <button className="start" onClick={()=> setTimerOn(true)}>Start</button>
                <button className="stop" onClick={()=> setTimerOn(false)}>Stop</button>
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>

        </div>
    )
}

export default Timer