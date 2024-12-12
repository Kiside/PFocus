import UnsplashService from "../../services/UnsplashService.jsx";
import ImageSearch from "../presentational/ImageSearch.jsx";


const ImageSearchContainer = () => {
    //const [images, setImages] = useState([]);

    //const [query, setQuery] = useState("");

    const fetchImages = async (newQuery) => {
        const results = await UnsplashService.getImages(newQuery);
        //setImages(results);
        console.log(`result: ${results}`);
    };

    const handleClick = () =>
    {
        fetchImages("natural");
    }

    return(<ImageSearch
    onClick={handleClick}>
    </ImageSearch>);

}

export default ImageSearchContainer;