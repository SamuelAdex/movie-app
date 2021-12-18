import React, {useContext} from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import AddFavorite from './components/AddFavorite'
import MovieContext from './Context/MovieContext'
import RemoveFavorite from './components/RemoveFavorite'


function App() {
  const {movies, addToFavorite, favoriteMovies, removeFavoriteMovie} = useContext(MovieContext)


  return (
    <div className="App">
      <Header />
      <main>
        <MovieList movies={movies} favoriteComponent={AddFavorite} handleFavoriteClick={addToFavorite} />
        <h2 style={{margin: '20px', color: 'white'}}>My Favourite Movies</h2>
        <MovieList movies={favoriteMovies} favoriteComponent={RemoveFavorite} handleFavoriteClick={removeFavoriteMovie} />
      </main>
    </div>
  );
}

export default App;