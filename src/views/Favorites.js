import { useSelector } from "react-redux";
import { Movie } from '../components/Movie';
import { Link } from 'react-router-dom'; 

export const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    const favoriteMovies = favorites.movies;

    return (
        <section className="container">
            <h1>Meus filmes favoritos</h1>

            {favoriteMovies.length === 0 ? (
                <div className="alert alert-info" role="alert">
                    Você ainda não adicionou nenhum filme aos favoritos.
                    
                    <p>Navegue pela <Link to="/">página inicial</Link> para encontrar filmes e adicioná-los!</p>
                </div>
            ) : (
                
                <div className="row gy-5">
                    {favoriteMovies.map(movie => (
                        <div key={movie.id} className="col-3">
                            <Movie movie={movie} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};
