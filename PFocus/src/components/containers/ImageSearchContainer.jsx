import UnsplashService from "../../services/UnsplashService.jsx";
import ImageSearch from "../presentational/ImageSearch.jsx";
import {useState} from "react";


const ImageSearchContainer = () => {

    const [images, setImages] = useState([]);
    //const [query, setQuery] = useState("");
    const [showImageSearch, setShowImageSearch] = useState(false);

    const fetchImages = async (newQuery) => {
        const results = await UnsplashService.getImages(newQuery);
        setImages(results);

        results.forEach((image) => {
            console.log(`result: ${image.urls.small}`);
        });

    };

    const handleClick = () =>
    {
        fetchImages("natural");
    }

    return(<div>
        {showImageSearch && (
        <ImageSearch
            onClick={handleClick}
            images={images}/>)}
    </div>);

}

export default ImageSearchContainer;