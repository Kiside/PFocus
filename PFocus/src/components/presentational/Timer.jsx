import './Timer.css'
import PropTypes from 'prop-types';

function Timer({onPlay, onStop, onPause ,onChangeInput, timerLabel}) {
    return (
         <div className="input-container">
            <label>Inserisci</label>
            <input className="input-timer"
            type="number"
            placeholder="minuti"
            onChange={onChangeInput}>
            </input>
            <div>
                <label className='timer-label'>
                    {timerLabel}
                </label>
            </div>
            <div className="buttons-timer-container">
                <button onClick={onPause}>Pause</button>
                <button onClick={onPlay}>Play</button>
                <button onClick={onStop}>Stop</button>
            </div>
         </div>
    );
}

Timer.propTypes = {
    onPlay: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    timerLabel: PropTypes.string.isRequired,
};

export default Timer;