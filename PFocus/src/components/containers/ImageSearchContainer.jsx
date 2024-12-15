import UnsplashService from "../../services/UnsplashService.jsx";
import ImageSearch from "../presentational/ImageSearch.jsx";
import {useState} from "react";
import PropTypes from "prop-types";


function ImageSearchContainer({onSetBackground}) {

    const [images, setImages] = useState([]);
    //const [query, setQuery] = useState("");

    const fetchImages = async (newQuery) => {
        const results = await UnsplashService.getImages(newQuery);
        setImages(results);

        results.forEach((image) => {
            console.log(`result: ${image.urls.small}`);
        });

    };

    const handleImageClick = (image) =>
    {
        onSetBackground(image);
    }

    const handleClick = () =>
    {
        fetchImages("natural");
    }

    return(<div>
        <ImageSearch
            onClick={handleClick}
            images={images}
            onImageClick={handleImageClick}/>
    </div>);

}
ImageSearchContainer.propTypes = {
    onSetBackground: PropTypes.func.isRequired,
};



export default ImageSearchContainer;