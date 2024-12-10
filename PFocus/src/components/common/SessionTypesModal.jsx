import './Modal.css';
import PropTypes from 'prop-types';
import {useState} from "react";

function SessionTypesModal({sessionTypesDuration, onSave}) {

    const [localSessionTypesDuration, setLocalSessionTypesDuration] = useState({
        FOCUS: sessionTypesDuration.FOCUS.duration,
        BREAK: sessionTypesDuration.BREAK.duration,
        LONGBREAK: sessionTypesDuration.LONGBREAK.duration,
    });

    const handleChangeInput = (type, value) => {
        setLocalSessionTypesDuration((prev) => ({
            ...prev,
            [type]: value,
        }));
    }

    const handleSave = () => {
        Object.keys(localSessionTypesDuration).forEach((type) => {
            onSave(type, parseInt(localSessionTypesDuration[type], 10));
        });
    }

    return(
    <div className="overlay">
        <div className="modal">
            {Object.keys(localSessionTypesDuration).map((type) =>(
                <div key={{type}}>
                    <input
                    type="number"
                    value={localSessionTypesDuration[type]}
                    onChange={(e) => handleChangeInput(type, e.target.value)}/>
                </div>
            ))}
            <button onClick={handleSave}>Save</button>
        </div>
    </div>
    );

}

SessionTypesModal.propTypes = {
    sessionTypesDuration: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default SessionTypesModal;