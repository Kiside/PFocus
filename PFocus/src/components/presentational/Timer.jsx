import './Timer.css'
import PropTypes from 'prop-types';
import {FaPlay, FaPause, FaEdit, FaStop} from "react-icons/fa";
import ProgressBar from "../common/ProgressBar.jsx"

function Timer({onPlayOrPause, onStop, timerLabel, isPlaying}) {


    return (
        <div className="timer-container">
            <label className="session-label">FOCUS</label>
            <ProgressBar></ProgressBar>
            <div className="timer-label-container">
                <label className='timer-label'>
                    {timerLabel}
                </label>
            </div>
            <div className="buttons-timer-container">
                <button className='button-timer' data-size="medium"><FaEdit className="icon-medium"/></button>
                <button className='button-timer' data-size="large" onClick={onPlayOrPause}>
                    {isPlaying ?  <FaPause className="icon-large"/> : <FaPlay className="icon-large"/>}
                </button>
                <button className='button-timer' data-size="medium" onClick={onStop}><FaStop className="icon-medium"/>
                </button>
            </div>
        </div>
    );
}

//<button className='button-timer' data-size="large" onClick={onPlay}><FaPlay className="icon-large"/>
//</button>


Timer.propTypes = {
    onPlayOrPause: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    timerLabel: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
};

export default Timer;