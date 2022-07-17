import './card.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setFavourit, removeFavourit } from "../../store/actions/favourite"
import { MdFavorite } from 'react-icons/md';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const placeholderImg =
    "https://cg.sc.gov/sites/cg/files/Documents/Images/NewspaperIcon_0.jpg";
const path = 'https://image.tmdb.org/t/p/w500/';



export default function MovieCard({ movie }) {

    const favMovies = useSelector((state) => state.star.favItems);
    const dispatch = useDispatch()
    let likedMovie = favMovies.includes(movie);

    const addToFavourit = () => {
        dispatch(setFavourit(movie));

    };

    const removeFromFavourit = () => {
        dispatch(removeFavourit(movie));
    };

    const urlToImage = `${path}${movie.poster_path}`;
    return (
        <div className="card h-100">
            <Link to={`/movie/${movie.id}`}>  <img
                src={urlToImage ? urlToImage : placeholderImg}
                className="card-img-top"
                alt=''
            /></Link>
            <div className='starFav'>

                {
                    likedMovie ?
                        (<MdFavorite
                            style={{
                                color: 'red',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                            }}
                            aria-label="remove from favourit list"
                            onClick={removeFromFavourit}
                        />) :
                        (<MdOutlineFavoriteBorder
                            style={{
                                color: 'red',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                            }}
                            aria-label="add to favourit list" onClick={addToFavourit}
                        />)
                }
            </div>
        </div >
    );
}