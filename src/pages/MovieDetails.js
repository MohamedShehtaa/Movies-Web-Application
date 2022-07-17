import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MoviesDetailsPage from '../component/MoviesDetails/MoviesDetailsPage'
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetails } from '../store/actions/movies'

export default function MovieDetails() {
    // const [movie, setMovie] = useState([]);
    const movie = useSelector(state => state.movies.movieDetails)
    const dispatch = useDispatch()
    const params = useParams();

    useEffect(() => {
        dispatch(getMovieDetails(params.id))
    }, []);

    return (
        <div>
            <MoviesDetailsPage movie={movie} />
        </div>
    );
}
