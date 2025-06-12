import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { MoviesServices } from "../api/MoviesServices";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getMovie = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const { data } = await MoviesServices.getMovieDetail(id);
            setMovie(data);
        } catch (err) {
            console.error("Erro ao carregar detalhes do filme:", err);
            setError("Não foi possível carregar os detalhes do filme. Por favor, tente novamente mais tarde.");
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    if (isLoading) {
        return (
            <section className="movie-detail container text-center py-5">
                <p>Carregando detalhes do filme...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="movie-detail container text-center py-5">
                <p className="text-danger">{error}</p>
            </section>
        );
    }

    if (!movie) {
        return (
            <section className="movie-detail container text-center py-5">
                <p>Filme não encontrado.</p>
            </section>
        );
    }

    return(
        <section className="movie-detail py-5">
            <div className="container">
                {/* Primeira linha: Imagem e Detalhes Principais */}
                {/* align-items-start: Alinha o conteúdo ao topo da linha */}
                <div className="row gx-5 justify-content-center align-items-start mb-5"> {/* Adiciona margem inferior para separar da sinopse */}
                    <div className="col-12 col-md-5 text-center"> {/* Coluna da imagem */}
                        {movie.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                                alt={movie.title}
                                className="img-fluid rounded shadow-sm"
                            />
                         ) : (
                            <div className="bg-light d-flex justify-content-center align-items-center rounded" style={{ width: '100%', height: '400px' }}>
                                <p className="text-muted">Imagem não disponível</p>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-7 mt-4 mt-md-0"> {/* Coluna dos detalhes */}
                        <h1 className="mb-3">{movie.title}</h1>
                        <ul className="list-unstyled">
                            {movie.budget > 0 && <li><strong>Orçamento:</strong> U$ {movie.budget.toLocaleString('en-US')}</li>}
                            {movie.original_language && <li><strong>Idioma Original:</strong> {movie.original_language.toUpperCase()}</li>}
                            {movie.popularity && <li><strong>Popularidade:</strong> {movie.popularity.toFixed(2)}</li>}
                            {movie.release_date && <li><strong>Lançamento:</strong> {new Date(movie.release_date).toLocaleDateString('pt-BR')}</li>}
                            {movie.genres && movie.genres.length > 0 && (
                                <li><strong>Gêneros:</strong> {movie.genres.map(g => g.name).join(', ')}</li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Segunda linha: Sinopse (agora em sua própria linha e coluna de largura total) */}
                <div className="text-justify"> 
                    <div className="col-12 col-lg-10"> {/* Coluna de largura total (ou quase total para melhor leitura) */}
                        <h2 className="mb-3">Sinopse</h2>
                        {movie.overview ? (
                            <p className="lead text-justify">{movie.overview}</p>
                        ) : (
                            <p className="text-muted">Sinopse não disponível.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
};
