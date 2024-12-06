import './Timer.css'
import PropTypes from 'prop-types';

function Timer({minutes, onPlay, onChangeInput}) {
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
                    {(minutes)}:00
                </label>
            </div>
            <div className="buttons-timer-container">
                <button>Pause</button>
                <button onClick={onPlay}>Play</button>
                <button>Stop</button>
            </div>
         </div>
    );
}

Timer.propTypes = {
    minutes: PropTypes.number.isRequired,
    onPlay: PropTypes.func.isRequired,
    onChangeInput: PropTypes.func.isRequired,
};

Timer.defaultProps = {
    minutes: 0,
};

export default Timer;