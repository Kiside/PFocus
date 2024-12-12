class UnspashService {
    constructor() {
        this.apiKey = import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY;
        this.baseUrl = "https://api.unsplash.com";
    }

    async getImages(query){
        const url = `${this.baseUrl}/search/photos?query=${query}&orientation=landscape&client_id=${this.apiKey}`;
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`Errore nella chiamata API: ${response.status}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Errore durante il recupero delle immagini: ", error);
            return [];
        }
    }
}

export default new UnspashService();