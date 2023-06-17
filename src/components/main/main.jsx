import React from 'react';
import { useEffect, useState } from 'react';

import './Styles.css'
import { useParams } from 'react-router-dom';
import { Search } from '../InputSearch/Index';

import { RowMovies } from '../RowMovies';
import { response } from 'msw';



export default function Main() {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    let { genero } = useParams();

    const convertGender = () => {
        switch (genero) {
            case 'terror':
                genero = '27';
                return genero;

            case 'populares':
                genero = '';
                return genero;

            case 'action':
                genero = '28';
                return genero;

            case 'comedy':
                genero = '35';
                return genero;

            case 'romance':
                genero = '10749';
                return genero;

            case 'documentaries':
                genero = '99';
                return genero;
}
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value)
    }


    const moviesFiltrados = searchValue ? movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchValue.trim().toLowerCase())
    }) : movies;

  
    const handleMovies = async () => {
        const apiKey = process.env.REACT_APP_API_URL;     //terro: &with_genres=27 , acao: with_genres=28, comedia:with_genres=35, doc: with_genres=99, romance:with_genres=10749
        const baseUrl = 'https://api.themoviedb.org/3';
        const endpoint = '/movie/popular';
        let genderMovie = convertGender() ?? '';
       
        const url = `${baseUrl}${endpoint}?api_key=${apiKey}&with_genres=${genderMovie}`;

        const response = await fetch(url)
       
            .then(response => response.json())
            .then(responseJson => {
               
                
                setMovies(responseJson.results)

            });
    }

    console.log(response)
    useEffect(() => {
        handleMovies();
    }, []);

    useEffect(() => {
        handleMovies();
    }, [movies]);

    return (
        <section className='content-container'>
            <div className="d-flex mb-5  justify-content-center">
                <Search handleChange={handleChange} />
            </div>
            <RowMovies movies={moviesFiltrados} />
        </section>
    );


}







