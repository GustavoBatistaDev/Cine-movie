import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Styles.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
       
          <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#">
              <img height="120" className='' src="https://s2.glbimg.com/YZmm9KuxGZiPeMTSQdyQM0zpusM=/285x285/https://s2.glbimg.com/bJGBHfbR0EjG4HuU5D_DRly9xaE=/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/3/c/XbipmsR1GqcaCe5OVNkQ/cult.png" alt="" />
             
            </a>
            <button className='navbar-toggler' id='button-responsive' type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span ><i className="fa-sharp fa-solid fa-bars fa-1x  text-white"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto pl-3">
              <li className='nav-item  mx-2'>
                    <Link className="nav-link  text-white"  to="/filmes/populares">Populares</Link>
                </li>
                <li className='nav-item  mx-2'>
                    <Link className="nav-link  text-white"  to="/filmes/terror">Terror</Link>
                </li>
                <li className='nav-item  mx-2'>
                    <Link className="nav-link  text-white"  to="/filmes/action">Action</Link>
                </li>
                <li className='nav-item  mx-2'>
                    <Link className="nav-link  text-white"  to="/filmes/comedy">Comedy</Link>
                </li>
                <li className='nav-item  mx-2'>
                    <Link className="nav-link  text-white"  to="/filmes/romance">Romance</Link>
                </li>

                    
                <li className='nav-item  mx-2'>
                    <Link className="nav-link  text-white"  to="/filmes/documentaries">Documentaries</Link>
                </li>

                
              </ul>
              
            </div>
        </nav>
        
       
    )
}