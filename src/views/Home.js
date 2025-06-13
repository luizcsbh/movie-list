// src/views/Home.jsx

import { useEffect, useState, useCallback } from 'react';
import { Movie } from '../components/Movie';
import { MoviesServices } from '../api/MoviesServices';
import { PaginationControls } from '../components/PaginationControls';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getMovies = useCallback(async (page) => {
        setIsLoading(true);
        setError(null);
        try {
            const { data } = await MoviesServices.getMovies(page);
            setMovies(data.results);
            setTotalPages(data.total_pages);
        } catch (err) {
            console.error("Erro ao buscar filmes:", err);
            setError("Não foi possível carregar os filmes. Por favor, tente novamente.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getMovies(currentPage);
    }, [currentPage, getMovies]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (isLoading) {
        return (
            <div className="container text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </div>
                <p className="mt-2">Carregando filmes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container text-center py-5">
                <p className="text-danger">{error}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row g-2">
                {movies.map(movie => (
                    <div key={movie.id} className="col-3">
                        <Movie movie={movie} />
                    </div>
                ))}
            </div>
            {totalPages > 1 && (
                <div className="d-flex justify-content-center my-2">
                    <PaginationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
};
