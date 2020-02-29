import axios from 'axios'

const Key = `${process.env.REACT_APP_KEY}`;

export const fetchMovie = async (type, page = 1, language = "en-US", region = "") => {
    console.log(type, page)
    return axios
            .get(`https://api.themoviedb.org/3/movie/${type}?api_key=${Key}&page=${page}&language=${language}&region=${region}`)
            .then(res => res.data)
            .catch(err => console.log(err));    
}