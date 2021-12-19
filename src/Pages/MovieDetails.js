import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const params = useParams()
    const id = params.id;

    useEffect(()=>{
        fetchMovie(id)
    }, [id])

    //Get Current Movie through imdbID
    const fetchMovie = (currentId)=>{
        fetch(`https://www.omdbapi.com/?i=${currentId}&apikey=872d6af9`)
        .then(res => res.json())
        .then(data => {
            setMovie(data)
        })
        .catch(err => console.error(err))
    }



    return (
        <div className="detail-container">
            <Link to="/" className="link">Go Back</Link><br />
            <div className="movie-details">
                <img src={movie.Poster} alt="" />
                <div className="details">
                    <h2>{movie.Title}</h2><br />
                    <div className="desc">
                        <small><b>Description</b></small>
                        <p>{movie.Plot}</p>
                        <small><b>Runtime:</b> {movie.Runtime}</small>
                    </div><hr />
                    <div className="director">
                        <small><b>Director:</b> {movie.Director}</small>
                    </div>
                    <div className="writer">
                        <small><b>Writer:</b> {movie.Writer}</small>
                    </div>
                    <div className="actors">
                        <small><b>Actors:</b> {movie.Actors}</small>
                    </div>
                    <div className="genre">
                        <small><b>Genre:</b> {movie.Genre}</small>
                    </div>
                    <small><b>Released:</b> {movie.Released}</small>
                    <div className="rating">
                        <small><b>Rating:</b> {movie.imdbRating}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
