import { useEffect, useState} from 'react';
import Timer from '../presentational/Timer.jsx'

const getMilliseconds = (minutes) => {
    return isNaN(minutes) ? 25 : minutes * 60 * 1000;
}

const SessionTypes = Object.freeze({
    WORK: {label: 'WORK', duration: 25},
    BREAK: {label: 'BREAK', duration: 5},
    LONGBREAK: {label: 'LONGBREAK', duration: 20},
});

function TimerContainer() {
    const [sessionWorkCompleted, setSessionWorkCompleted] = useState(0);
    const [currentSession, setCurrentSession] = useState(SessionTypes.WORK);

    const [timerLabel, setTimerLabel] = useState('25:00');
    const [isPlaying, setIsPlaying] = useState(false);
    const [timer, setTimer] = useState(getMilliseconds(SessionTypes.WORK.duration));

    useEffect(() => {
        if(isPlaying)
        {
            if(timer > 0)
            {
                let time = timer - 1000;
                const timeout = setTimeout(() => {
                setTimer(time)}
                , 1000);

                return () => clearTimeout(timeout);
            }
            else
            {
                sessionCompleted();
            }
        }
    }, [timer, isPlaying]);

    const sessionCompleted = () => {
    setIsPlaying(false);

    let nextSession;
    let updatedWorkSessions = sessionWorkCompleted;

    if (currentSession.label === SessionTypes.WORK.label) {
        // Incrementa il conteggio delle sessioni di WORK
        updatedWorkSessions += 1;

        if (updatedWorkSessions < 3) {
            // Passa a BREAK se non hai completato 3 sessioni di WORK
            nextSession = SessionTypes.BREAK;
        } else {
            // Passa a LONGBREAK dopo 3 sessioni di WORK
            nextSession = SessionTypes.LONGBREAK;
            updatedWorkSessions = 0; // Resetta il conteggio
        }
    } else {
        // Torna a WORK dopo BREAK o LONGBREAK
        nextSession = SessionTypes.WORK;
    }

    // Aggiorna lo stato in modo sicuro
    setCurrentSession(nextSession);
    setSessionWorkCompleted(updatedWorkSessions);
    setNextSessionTimer(nextSession);
};

    const setNextSessionTimer = (nextSession) => {
        setTimer(getMilliseconds(nextSession.duration))
    }

    const handlePlay = () => {
        if(isPlaying)
            return;
        else
        {
            setIsPlaying(true);
        }
    }

    const handleStop = () => {
        setTimer(0);
        setIsPlaying(false);
    }

    const handlePause = () => {
        setIsPlaying(false);
    }

    const handleChangeInput = (e) => {
        console.log('change input');
        let milliseconds = getMilliseconds(e.target.value || 25);
        setTimer(milliseconds)
        setTimerLabel(milliseconds);
    }

    
    const getFormattedTimer = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);

        return `${minutes}:${seconds}` ;
    }

    const testTimer = () => {
        let newTimer = 2 * 1000;
        setTimer(newTimer);
    }

    return(
        <div>
            <button onClick={testTimer}>Test</button>
            <Timer
        onPlay={handlePlay}
        onStop={handleStop}
        onPause={handlePause}
        onChangeInput={(e) => handleChangeInput(e)}
        timerLabel={getFormattedTimer(timer)}/></div>
        
    )
}

export default TimerContainer;
