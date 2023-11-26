// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Movie 1', description: 'Description 1', posterURL: '../movie1.jpeg', rating: 8 },
    { title: 'Movie 2', description: 'Description 2',posterURL: '../movie2.jpeg', rating: 7 },
    { title: 'Movie 3', description: 'Description 3', posterURL: '../mouvie3.jpeg', rating: 6 },
    { title: 'Movie 4', description: 'Description 4', posterURL: '../mouvie4.jpeg', rating: 4 },
    { title: 'Movie 5', description: 'Description 5', posterURL: '../mouvie5.jpeg', rating: 2 },
    { title: 'Movie 6', description: 'Description 6', posterURL: '../mouvie6.jpeg', rating: 10 },
    { title: 'Movie 7', description: 'Description 7', posterURL: '../mouvie7.jpeg', rating: 1 },
    { title: 'Movie 8', description: 'Description 8', posterURL: '../mouvie8.jpeg', rating: 3 },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleFilterChange = (type, value) => {
    setFilter({ ...filter, [type]: value });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating === parseFloat(filter.rating))
  );

  const handleAddMovie = (newMovie) => {
    setMovies([newMovie,...movies]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const title = e.target.title.value;
    const description = e.target.description.value;
    const posterURL = e.target.posterURL.value;
    const rating = parseFloat(e.target.rating.value);

    // Check if all fields are filled
    if (title && description && posterURL && !isNaN(rating)) {
      const newMovie = { title, description, posterURL, rating };
      handleAddMovie(newMovie);

      // Reset form fields
      e.target.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  const style1 ={
     
      display: "bloc",
      
      justifyContent: "spaceBetween",
      alignItems: "center",
      margin :"50px"
    }
    

  return (
    <div >
      <div style={style1}>
      <h1>liste mouvies</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
       <di>
       <form onSubmit={handleFormSubmit} >
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <label>
          Description:
          <textarea name="description" required />
        </label>
        <label>
          Poster URL:
          <input type="text" name="posterURL" required />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" step="0.1" required />
        </label>
        <button type="submit">Add Movie</button>
      </form>
      </di>
      </div>
    </div>
  );
};

export default App;
