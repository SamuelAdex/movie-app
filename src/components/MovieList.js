import React from 'react'



const MovieList = ({movies, favoriteComponent, handleFavoriteClick}) => {
    const FavoriteComponent = favoriteComponent;


    return (
        <div className="movies">            
            <div className="movie-list">
                {movies? movies.map((movie, index) =>(
                    <div className="movie-container" key={index}>
                        <div className="img" style={{backgroundImage: `url(${movie.Poster})`, }}>
                            <div className="overlay" onClick={()=> handleFavoriteClick(movie)}>
                                <small>{movie.Title}</small>
                                <FavoriteComponent />
                            </div>
                        </div>
                    </div>
                )): (
                    <p style={{color: 'whitesmoke'}}>No Movies Available Here :)</p>
                )}
                              
            </div>
        </div>
    )
}

export default MovieList
