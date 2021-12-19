import {createContext, useState, useEffect} from 'react';


const MovieContext = createContext();
//https://www.omdbapi.com/?i=tt3896198&apikey=872d6af9

export const MovieProvider = ({children})=>{
    const [movies, setMovies] = useState([])

    const [searchValue, setSearchValue] = useState('')

    const [favoriteMovies, setFavoriteMovies] = useState([])

    
    //Fetching Movie Data from OMDB-API
    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=872d6af9`)
        .then(res => res.json())
        .then(data=> setMovies(data.Search))
        .catch(err => console.log(err))
    }, [searchValue])

    //Retrieving All Favorite Movies from Local Storage
    useEffect(()=>{
        const movieFavorite = JSON.parse(localStorage.getItem('favorite-movies'))

        setFavoriteMovies(movieFavorite)
    }, [])


    //Adding items to favorite movies
    const addToFavorite = (movie)=>{
        const newFavoriteMovies = [...favoriteMovies, movie];
        setFavoriteMovies(newFavoriteMovies)
        
        saveTolocalStorage(newFavoriteMovies)
    }

    //Removing items from favorite movies
    const removeFavoriteMovie = (movie)=>{
        const newFavoriteMovies = favoriteMovies.filter((favorite) => favorite.imdbID !== movie.imdbID)
        setFavoriteMovies(newFavoriteMovies)

        saveTolocalStorage(newFavoriteMovies)
    }

    //Saving Favorites Movies to LocalStorage
    const saveTolocalStorage = (items)=>{
        localStorage.setItem('favorite-movies', JSON.stringify(items))
    }


    return (
        <MovieContext.Provider value={{movies, searchValue, setSearchValue,addToFavorite, favoriteMovies, removeFavoriteMovie}} >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext;