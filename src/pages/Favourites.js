import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../component/MovieCard/MovieCard';


export default function Favourites() {
    const favMovies = useSelector((state) => state.star);
    console.log(favMovies.favItems)
    return (
        <>
            <p>Favorites:</p>
            {favMovies.favItems.length !== 0 ? "" : <p> No Favourites To Show</p>}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {favMovies.favItems.map((movie) => {
                    return (
                        <div className="col" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    );
                })}
            </div>

        </>
    )
}
