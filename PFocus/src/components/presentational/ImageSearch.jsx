import '../common/Modal.css';
import './ImageSearch.css';
import PropTypes from "prop-types";

function ImageSearch({onClick, images}) {

    return(
        <div className="overlay">
            <div className="modal" data-size="long">
                <div>
                    <button onClick={onClick}>click</button>
                </div>
                <div className="images-container">
                    {images.map((image) => (
                        <div className="image" key = {image.id}>
                            <img src={image.urls.small || "image"}/>
                        </div>
                        ))}
                </div>

            </div>
        </div>
    );

}

ImageSearch.propTypes = {
    onClick: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
}

export default ImageSearch;