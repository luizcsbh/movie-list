import axios from 'axios';

const API_KEY = '7e42d6b17f4014fe687909e62c78286e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesServices {
    static getMovies(){
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieDetail(id){
        return axios(withBaseUrl(`movie/${id}`))
    }
}