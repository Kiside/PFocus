import './ProgressBar.css'

function ProgressBar() {

    return(
        <div className="progress-bar-wrapper">
            <div className="progress-bar-background">
                <div className="progress-bar">
                    <div className="progress-bar-circle"></div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;