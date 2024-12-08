import './Timer.css'
import PropTypes from 'prop-types';

function Timer({onPlay, onStop, onPause, timerLabel}) {
    return (
         <div className="timer-container">
            <div>
                <label className='timer-label'>
                    {timerLabel}
                </label>
            </div>
            <div className="buttons-timer-container">
                <button className = 'button-timer' onClick={onPause}>Pause</button>
                <button className = 'button-timer' onClick={onPlay}>Play</button>
                <button className = 'button-timer' onClick={onStop}>Stop</button>
            </div>
         </div>
    );
}

Timer.propTypes = {
    onPlay: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    timerLabel: PropTypes.string.isRequired,
};

export default Timer;