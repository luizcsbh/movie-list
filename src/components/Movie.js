import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovie, removeMovie } from '../store/actions/movies';

export const Movie = ({ movie }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    return (
        <div className="movie-item">
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""/>
            </div>
            <div className="movie-excerpt">
                <h3>{movie.title}</h3>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                    Ver detalhes
                </Link>
                {
                    favorites.movies.find((m) => m.id === movie.id) ? (
                    <button className="btn btn-danger" onClick={() => dispatch(removeMovie(movie))}>
                        Remover dos favoritos
                    </button>
                    ) : (
                        <button className="btn btn-secondary" onClick={() => dispatch(addMovie(movie))}>
                            Adicionar aos favoritos
                        </button>
                    )
                }
            </div>
        </div>
    );
};