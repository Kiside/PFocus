import './Modal.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";

function SessionTypesModal({sessionTypesDuration, onSave, onClose}) {

    const [localSessionTypesDuration, setLocalSessionTypesDuration] = useState({
        FOCUS: sessionTypesDuration.FOCUS.duration,
        BREAK: sessionTypesDuration.BREAK.duration,
        LONGBREAK: sessionTypesDuration.LONGBREAK.duration,
    });

    useEffect(() => {
        setLocalSessionTypesDuration({
            FOCUS: sessionTypesDuration.FOCUS.duration,
            BREAK: sessionTypesDuration.BREAK.duration,
            LONGBREAK: sessionTypesDuration.LONGBREAK.duration,
        });
    }, [sessionTypesDuration]);

    const handleChangeInput = (type, value) => {
        setLocalSessionTypesDuration((prev) => ({
            ...prev,
            [type]: value,
        }));
    }

    const handleSave = () => {

        const updatedSessions = {};

        Object.keys(localSessionTypesDuration).forEach((type) => {
            updatedSessions[type] = {
                ...sessionTypesDuration[type],
                duration: parseInt(localSessionTypesDuration[type], 10),
            };
        });

        console.log(`handleSave: ${updatedSessions.FOCUS.duration}`);

        onSave(updatedSessions);
        onClose();
    }

    return(
    <div className="overlay">
        <div className="modal">
            {Object.keys(localSessionTypesDuration).map((type) =>(
                <div key={type}>
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
    onClose: PropTypes.func.isRequired,
};

export default SessionTypesModal;