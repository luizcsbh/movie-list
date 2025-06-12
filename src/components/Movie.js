import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovie, removeMovie } from '../store/actions/movies';
import '../Movie.css'; 

export const Movie = ({ movie }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const isFavorite = favorites.movies.find((m) => m.id === movie.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeMovie(movie));
        } else {
            dispatch(addMovie(movie));
        }
    };

    return (
        <div className="movie-item">
            <div className="movie-poster-container">
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} className="movie-poster"/>
                <span
                    className={`favorite-star ${isFavorite ? 'favorited' : ''}`}
                    onClick={handleFavoriteClick}
                    title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                    {isFavorite ? '⭐' : '☆'} {/* Estrela preenchida ou vazia */}
                </span>
            </div>
            <div className="movie-excerpt">
                <h3 className="movie-title">{movie.title}</h3> {/* Adicionado classe para estilização */}
                <Link to={`/movie/${movie.id}`} className="btn btn-primary movie-details-btn">
                    Ver detalhes
                </Link>
            </div>
        </div>
     );
};
