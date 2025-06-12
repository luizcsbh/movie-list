import axios from 'axios';

const API_KEY = '7e42d6b17f4014fe687909e62c78286e';
const BASE_URL = 'https://api.themoviedb.org/3/';

export class MoviesServices {

    static #withBaseUrl(path, page = 1 ) { 
        return `${BASE_URL}${path}?api_key=${API_KEY}&page=${page}`;
    }

    /**
     * Busca uma lista de filmes populares com paginação.
     * @param {number} [page=1] - O número da página a ser buscada. Padrão é 1.
     * @returns {Promise<AxiosResponse>} Uma promessa que resolve para a resposta do Axios contendo os filmes populares.
     * @throws {Error} Lança um erro se a requisição falhar.
     */
    static async getMovies(page = 1) { 
        try {
            const response = await axios.get(MoviesServices.#withBaseUrl('movie/popular', page));
            return response;
        } catch (error) {
            console.error(`Erro ao buscar filmes populares na página ${page}:`, error);
            throw error;
        }
    }

    /**
     * Busca os detalhes de um filme específico pelo seu ID.
     * @param {number} id - O ID do filme.
     * @returns {Promise<AxiosResponse>} Uma promessa que resolve para a resposta do Axios contendo os detalhes do filme.
     * @throws {Error} Lança um erro se a requisição falhar.
     */
    static async getMovieDetail(id) {
        try {
     
            const response = await axios.get(MoviesServices.#withBaseUrl(`movie/${id}`));
            return response;
        } catch (error) {
            console.error(`Erro ao buscar detalhes do filme com ID ${id}:`, error);
            throw error;
        }
    }
}
