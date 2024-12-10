import './ProgressBar.css'
import PropTypes from "prop-types";

function ProgressBar({progressPercentage}) {



    return(
        <div className="progress-bar-wrapper">
            <div className="progress-bar-background">
                <div className="progress-bar"
                    style={{width: `${progressPercentage || 100}%`}}>
                    <div className="progress-bar-circle"></div>
                </div>
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    progressPercentage: PropTypes.number.isRequired,
}

export default ProgressBar;