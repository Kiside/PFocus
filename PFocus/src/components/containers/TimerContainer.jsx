import { useEffect, useState} from 'react';
import Timer from '../presentational/Timer.jsx'
import SessionTypesModal from "../common/SessionTypesModal.jsx";
import ImageSearchContainer from "./ImageSearchContainer.jsx";

const getMilliseconds = (minutes) => {
    return isNaN(minutes) ? 25 : minutes * 60 * 1000;
}

const SessionTypes = Object.freeze({
    FOCUS: {label: 'FOCUS', duration: 25},
    BREAK: {label: 'BREAK', duration: 5},
    LONGBREAK: {label: 'LONGBREAK', duration: 20},
});

function TimerContainer() {
    const [sessionWorkCompleted, setSessionWorkCompleted] = useState(0);
    const [sessionsType, setSessionsType] = useState(SessionTypes);
    const [currentSession, setCurrentSession] = useState(sessionsType.FOCUS);

    const [showSessionTypesModal, setShowSessionTypesModal] = useState(false);
    const [showImageSearcherModal, setShowImageSearcherModal] = useState(false);
    const [background, setBackground] = useState("");

    const [isPlaying, setIsPlaying] = useState(false);
    const [timer, setTimer] = useState(getMilliseconds(sessionsType.FOCUS.duration));

    const [progressPercentage, setProgressPercentage] = useState(0);

    useEffect(() => {
        if(isPlaying)
        {
            if(timer > 0)
            {
                console.log(`currentSessionDuration: ${currentSession.duration}`);
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

    if (currentSession.label === sessionsType.FOCUS.label) {
        // Incrementa il conteggio delle sessioni di WORK
        updatedWorkSessions += 1;

        if (updatedWorkSessions < 3) {
            // Passa a BREAK se non hai completato 3 sessioni di WORK
            nextSession = sessionsType.BREAK;
            console.log(`get break duration: ${sessionsType.BREAK.duration}`);
            console.log(`nextSession duration: ${nextSession.duration}`);
        } else {
            // Passa a LONGBREAK dopo 3 sessioni di WORK
            nextSession = sessionsType.LONGBREAK;
            updatedWorkSessions = 0; // Resetta il conteggio
        }
    } else {
        // Torna a WORK dopo BREAK o LONGBREAK
        nextSession = sessionsType.FOCUS;
    }



    // Aggiorna lo stato in modo sicuro
    setCurrentSession(nextSession);
    setSessionWorkCompleted(updatedWorkSessions);
    setTimer(getMilliseconds(nextSession.duration));
    setProgressPercentage(100);
};

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
        if(!isPlaying)
            return;
        setTimer(getMilliseconds(currentSession.duration));
        setProgressPercentage(100);
        setIsPlaying(false);
    }

    const handlePause = () => {
        setIsPlaying(false);
    }

    const handleEdit = () => {
        setShowSessionTypesModal(!showSessionTypesModal);
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

    const tempBackground = () => {
        setShowImageSearcherModal(!showImageSearcherModal);
    }

    const handleSetBackground = (image) => {
        setBackground(image.urls.full);
    }

    const onSaveDurationSessions = (updatedSessions) => {

        const updateSessionsType = {
            ...sessionsType,
            ...updatedSessions,
        };


        setSessionsType(updateSessionsType);

        if(updateSessionsType[currentSession.label])
        {
            const updateCurrentSession = {
                ...currentSession,
                duration: updateSessionsType[currentSession.label].duration,
            };
            console.log(`updateCurrentSession: ${updatedSessions.label} - ${updatedSessions.duration}`);
            setCurrentSession(updateCurrentSession);
            let milliseconds = getMilliseconds(updateCurrentSession.duration);
            setTimer(milliseconds);
        }
    }

    return(
        <div  style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
            <button onClick={testTimer}>Test</button>
            <button onClick={tempBackground}>Background</button>
            <Timer
        onPlayOrPause={handlePlayOrPause}
        onStop={handleStop}
        onEdit={handleEdit}
        sessionLabel={currentSession.label}
        timerLabel={getFormattedTimer(timer)}
        percentageProgressBar={progressPercentage}
        isPlaying={isPlaying}/>
            {showSessionTypesModal && (
                <SessionTypesModal
                    sessionTypesDuration={sessionsType}
                    onSave={onSaveDurationSessions}
                    onClose={handleEdit}
                />
            )}
            {showImageSearcherModal && (
                <ImageSearchContainer
                onSetBackground={handleSetBackground}/>
            )}
        </div>
    )
}

export default TimerContainer;
