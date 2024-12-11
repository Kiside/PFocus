import UnsplashService from "../../services/UnsplashService.jsx";


const ImageSearchContainer = () => {
    const [images, setImages] = useState([]);

    const [query, setQuery] = useState("");

    const fetchImages = async (newQuery) => {
        const results = await UnsplashService.getImages(newQuery);
        setImages(results);
    };




}

export default ImageSearchContainer;