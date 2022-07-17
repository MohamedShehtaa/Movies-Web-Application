import React from 'react'
import './moviePage.css'


const path = 'https://image.tmdb.org/t/p/w500/';

export default function MoviesDetailsPage({ movie: { title, overview, release_date, poster_path } }) {
    const urlToImage = `${path}${poster_path}`;
    return (
        <div className='cover' >

            <img
                src={urlToImage}
                style={{ objectFit: "cover", width: "100vw", height: "80vh", opacity: "0.6" }}
                className="card-img-top"
                alt=""
            />
            <div className="content">
                <img
                    src={urlToImage}
                    className="card-img"
                    alt=""
                />
                <div className="subContent">
                    <h1>{title}</h1>
                    <p>{overview}</p>
                </div>
            </div>


        </div>
    )
}
