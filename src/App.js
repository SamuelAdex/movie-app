import React, {useContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import MovieList from './components/MovieList'
import AddFavorite from './components/AddFavorite'
import MovieContext from './Context/MovieContext'
import RemoveFavorite from './components/RemoveFavorite'
import MovieDetails from './Pages/MovieDetails'


function App() {
  const {movies, addToFavorite, favoriteMovies, removeFavoriteMovie} = useContext(MovieContext)


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
              <Route path="/" element={
                <>
                  <MovieList movies={movies} favoriteComponent={AddFavorite} handleFavoriteClick={addToFavorite} />
                </>
              } >
              </Route>
              <Route path="/:id" element={<MovieDetails />} />                    
          </Routes>
          <>
            <h2 style={{margin: '20px', color: 'white'}}>My Favourite Movies</h2>
            <MovieList movies={favoriteMovies} favoriteComponent={RemoveFavorite} handleFavoriteClick={removeFavoriteMovie} />
          </>
          <center style={{color: 'whitesmoke', marginBottom: '20px', fontWeight:'bold'}}>Made with 💛 by Samuel Adex</center>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;