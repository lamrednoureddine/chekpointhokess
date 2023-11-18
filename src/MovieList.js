// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import movies from './Movies';

function MovieList({ filters }) {
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      movie.rating >= filters.rating
  );

  return (
    <div>
      {filteredMovies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
