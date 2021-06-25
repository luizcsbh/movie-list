import { useEffect, useState } from 'react';
import { Movie } from '../components/Movie';
import { MoviesServices} from '../api/MoviesServices';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const {
            data: { results },
        } = await MoviesServices.getMovies();
        
        setMovies(results);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className="container">
            <div className="row gy-5">
                {movies.map(movie => (
                    <div key={movie.id} className="col-3">
                        <Movie movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );    
};