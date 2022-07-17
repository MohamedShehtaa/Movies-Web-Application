import React, { useEffect } from "react";

import MovieCard from '../component/MovieCard/MovieCard'
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../store/actions/movies";

export default function Movies() {

    const movies = useSelector((state) => state.movies.movieList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieList())
    }, []);

    return (
        <>
            <div>Movies</div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {movies.map((movie) => {
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
