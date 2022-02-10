import React, {useState, useEffect} from "react";

import {Button, TimeWrapper} from '../StyledComponents/Timer.styled'

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
        <TimeWrapper>
            <p>{seconds}.{milliseconds}</p>
            <Button bg="#0f0" onClick={()=> setTimerOn(true)}>Start</Button>
            <Button bg="#f00" onClick={()=> setTimerOn(false)}>Stop</Button>
            <Button bg="#f00" onClick={handleReset}>Reset</Button>
        </TimeWrapper>
    )
}

export default Timer