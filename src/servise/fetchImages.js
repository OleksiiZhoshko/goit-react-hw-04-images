import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/'
const KEY = '?key=31715954-2386a5915a6907852388fbb64'
const param = '&image_type=photo&orientation=horizontal&safesearch=true'
// import { refs } from "./refs";
// import { infoMessage } from "./notifix";

export async function fetchImages(qwery, page) {
    try {
        const response = await axios.get(`${BASE_URL}${KEY}&q=${qwery}${param}&page=${page}&per_page=12`)
      return response.data
        }
    catch (error) {
      console.log(error);
  }
}

export default fetchImages;