import axios from 'axios'
import {Key} from './Key'

export const fetchMovie = async (type, page = 1, language = "en-US", region = "") => {
    return axios
            .get(`https://api.themoviedb.org/3/movie/${type}?api_key=${Key}&page=${page}&language=${language}&region=${region}`)
            .then(res => res.data)
            .catch(err => console.log(err));    
}