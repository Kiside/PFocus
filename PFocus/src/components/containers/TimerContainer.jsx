import { useState} from 'react';
import Timer from '../presentational/Timer.jsx'

function TimerContainer() {
    const [minutes, setMinutes] = useState (0);
    const [timerLabel, setTimerLabel] = useState('00:00');

    const handlePlay = () => {
        setTimerLabel(minutes.toString());
    }

    const handleChangeInput = (e) => {
        console.log('change input');
        setMinutes(parseInt(e.target.value) || 0)
        
    }

    return(
        <Timer
        minutes={minutes}
        onPlay={handlePlay}
        onChangeInput={(e) => handleChangeInput(e)}/>
    )


}

export default TimerContainer;
