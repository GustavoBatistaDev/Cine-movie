
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'
import P from 'prop-types';

export const MovieCard = ({id, title, poster_path }) => {
    const urlBaseImg = 'https://image.tmdb.org/t/p/w300/';


   

    return (

        <div>
            <div className="movieCard ">
                <img height="100%" width="100%" src={urlBaseImg + poster_path} alt="" />
                <div className="content">
                    <h4 className='text-white m-3'>{title}</h4>

                    <Link to={`/filme/${id}`}  className='bg-danger position-absolute  text-white'>Detail</Link>

                </div>
            </div>

        </div>





    );
}
MovieCard.propTypes = {
    title: P.string.isRequired,
    poster_path: P.string.isRequired,
    id: P.number.isRequired
}

