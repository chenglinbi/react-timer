import React, {useState, useEffect} from 'react'

const Form = (props) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [totalSeconds, setTotalSeconds] = useState(0)

    useEffect(() => {
        setTotalSeconds(props.totalSeconds)
        console.log(`Total second is ${props.totalSeconds}`)
    }, [props.totalSeconds])

    const onStartButtonClick = () => {
        
        setTotalSeconds((hours * 60 * 60) + (minutes * 60) + +seconds)
        props.onStartButtonClick(totalSeconds)
    }

    const onStopButtonClick = () => {
        props.onStopButtonClick()
    }
    return (
        <div>
            <div className="row">
                <div className="col">
                    <input value={hours} onChange={e => setHours(e.target.value)} id="hoursTextBox" placeholder="hours" type="number" aria-describedby="basic-addon1" />
                    <input value={minutes} onChange={e => setMinutes(e.target.value)} id="minutesTextBox" placeholder="minutes" type="number" aria-describedby="basic-addon1" />
                    <input value={seconds} onChange={e => setSeconds(e.target.value)} id="secondsTextBox" placeholder="seconds" type="number" aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={onStartButtonClick} type="button" className="btn btn-primary">Start Timer</button>
                    <button onClick={onStopButtonClick} type="button" className="btn btn-primary">Stop Timer</button>
                </div>
            </div>
        </div>
    )
}

export default Form