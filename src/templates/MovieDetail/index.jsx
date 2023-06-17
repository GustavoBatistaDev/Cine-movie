import React, { useEffect, useState } from "react";
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";

import './Styles.css';

export const MovieDetail = () => {
  const [movie, setMovie] = useState("");
  const baseUrl = 'https://api.themoviedb.org/3';
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500//';
  const { id } = useParams();

  const handleMovie = async () => {
    const apiKey = process.env.REACT_APP_API_URL;
    
    const endpoint = `/movie/${id}`;
    const url = `${baseUrl}${endpoint}?api_key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setMovie(responseJson);
        
      });
  };

  useEffect(() => {
    handleMovie();
  }, []);

  return (
    <div>
      <Menu />
        <section className="container main-section-detail">
           <div className="row">
           <div className="col-md-6">
                <div className="container-image">
                    <img className="img-fluid" src={baseImageUrl+ movie.poster_path} alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <h1 className="text-danger">{movie.title}</h1>
                <div className="text-white mb-4">
                    {movie.overview}
                </div>
                <a className="p-3 mt-3 bg-danger text-white"  href="">Watch Now</a>
            </div>
           </div>
        </section>
      <Footer />
    </div>
  );
};
