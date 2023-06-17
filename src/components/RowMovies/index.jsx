import React from 'react';

import './Styles.css';
import P from 'prop-types';
import { MovieCard } from "../MovieCard";

export const RowMovies = ({ movies }) => {

    

    return (
        <main className='row-movies' >
            {movies.map(movie => (
                <MovieCard key={movie.id} title={movie.title}
                    poster_path={movie.poster_path}
                    id={movie.id} />

            ))}

        </main>
    );
}
RowMovies.propTypes = {
    movies: P.array.isRequired,


}