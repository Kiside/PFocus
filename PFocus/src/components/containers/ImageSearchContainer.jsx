import UnsplashService from "../../services/UnsplashService.jsx";
import ImageSearch from "../presentational/ImageSearch.jsx";
import {useState} from "react";
import {useBackground} from "../contexts/BackgroundContext.jsx";
import PropTypes from "prop-types";


function ImageSearchContainer({ onImageClick }) {

    const [images, setImages] = useState([]);
    //const [query, setQuery] = useState("");
    const {setBackground} = useBackground();

    const fetchImages = async (newQuery) => {
        const results = await UnsplashService.getImages(newQuery);
        setImages(results);

        results.forEach((image) => {
            console.log(`result: ${image.urls.small}`);
        });

    };

    const handleImageClick = (image) =>
    {
        setBackground(image.urls.full);
        onImageClick();
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
    onImageClick: PropTypes.func.isRequired,
}
export default ImageSearchContainer;