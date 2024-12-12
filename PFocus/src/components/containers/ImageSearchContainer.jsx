import UnsplashService from "../../services/UnsplashService.jsx";
import ImageSearch from "../common/ImageSearch.jsx";


const ImageSearchContainer = () => {
    const [images, setImages] = useState([]);

    const [query, setQuery] = useState("");

    const fetchImages = async (newQuery) => {
        const results = await UnsplashService.getImages(newQuery);
        setImages(results);
    };



    return(<ImageSearch></ImageSearch>);

}

export default ImageSearchContainer;