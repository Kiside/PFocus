import { useEffect, useState} from 'react';
import Timer from '../presentational/Timer.jsx'

const getMilliseconds = (minutes) => {
    return isNaN(minutes) ? 25 : minutes * 60 * 1000;
}

const SessionTypes = Object.freeze({
    WORK: {label: 'FOCUS', duration: 25},
    BREAK: {label: 'BREAK', duration: 5},
    LONGBREAK: {label: 'LONGBREAK', duration: 20},
});

function TimerContainer() {
    const [sessionWorkCompleted, setSessionWorkCompleted] = useState(0);
    const [currentSession, setCurrentSession] = useState(SessionTypes.WORK);

    const [isPlaying, setIsPlaying] = useState(false);
    const [timer, setTimer] = useState(getMilliseconds(SessionTypes.WORK.duration));

    const [progressPercentage, setProgressPercentage] = useState(0);

    useEffect(() => {
        if(isPlaying)
        {
            if(timer > 0)
            {
                let totalTime = getMilliseconds(currentSession.duration);
                let time = timer - 1000;
                let percentage = ((timer/totalTime) * 100);
                setProgressPercentage(percentage % 1 === 0 ? percentage : progressPercentage);



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
    setProgressPercentage(100);
};

    const setNextSessionTimer = (nextSession) => {
        setTimer(getMilliseconds(nextSession.duration))
    }

    const handlePlayOrPause = () => {
        if(isPlaying)
        {
            handlePause();
        }

        else
        {
            setIsPlaying(true);
        }
    }

    const handleStop = () => {
        setTimer(getMilliseconds(currentSession.duration));
        setProgressPercentage(100);
        setIsPlaying(false);
    }

    const handlePause = () => {
        setIsPlaying(false);
    }

    
    const getFormattedTimer = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));

        let seconds = parseInt(total_seconds % 60).toString().padStart(2,'0');
        let minutes = parseInt(total_minutes % 60).toString().padStart(2,'0');

        return `${minutes}:${seconds}` ;
    }

    const testTimer = () => {

        let newTimer = 2 * 1000;
        setProgressPercentage((newTimer/ getMilliseconds(currentSession.duration)) * 100)
        setTimer(newTimer);
    }



    return(
        <div>
            <button onClick={testTimer}>Test</button>
            <Timer
        onPlayOrPause={handlePlayOrPause}
        onStop={handleStop}
        sessionLabel={currentSession.label}
        timerLabel={getFormattedTimer(timer)}
        percentageProgressBar={progressPercentage}
        isPlaying={isPlaying}/></div>
        
    )
}

export default TimerContainer;
