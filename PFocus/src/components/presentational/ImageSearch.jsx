import '../common/Modal.css';
import PropTypes from "prop-types";

function ImageSearch({onClick}) {

    return(
        <div className="overlay">
            <div className="modal">
                <button onClick={onClick} >click</button>
            </div>
        </div>
    );

}

ImageSearch.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default ImageSearch;