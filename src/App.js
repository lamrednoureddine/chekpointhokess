// App.js
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';

function App() {
  const [filters, setFilters] = useState({ title: '', rating: 0 });

  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0 });
  const [movies, setMovies] = useState([
    // ... vos films existants ici
  ]);


  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };


  const handleAddMovie = () => {
    // Ajoutez le nouveau film à la liste
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    
    // Effacez le formulaire après l'ajout
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };




  return (
    <div className='App'>
      <h1>Liste des films</h1>
      
       <input type="text" name="title" value={filters.title} onChange={handleFilterChange} placeholder="Filtrer par titre" /> 
      <input type="number" name="rating" value={filters.rating} onChange={handleFilterChange} placeholder="Filtrer par note" /> 

    
     

 {/* Ajoutez un formulaire pour ajouter un nouveau film */}
 <div>
        <h2>Ajouter un nouveau film</h2>
        <label>Titre:
          <input type="text" name="title" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
        </label>
        <label>Description:
          <input type="text" name="description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
        </label>
        <label>URL de l'affiche:
          <input type="text" name="posterURL" value={newMovie.posterURL} onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
        </label>
        <label>Note:
          <input type="number" name="rating" value={newMovie.rating} onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })} />
        </label>
        <button onClick={handleAddMovie}>Ajouter</button>
      </div>

      {/* Passez les filtres et la liste de films au composant MovieList */}
      <MovieList filters={filters} movies={movies} />


    </div>
  );
}

export default App;
