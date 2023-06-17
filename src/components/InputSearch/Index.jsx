import React from 'react';
import './Styles.css';
import P from 'prop-types';

export function Search({ handleChange }) {
    return (
        <div className="search" >
            <input onChange={handleChange} type="search" className='search-input' placeholder="Search" />
            <i id="search" className="MX-0 fa-solid fa-magnifying-glass text-white"></i>
        </div>
    )

}

Search.propTypes = {
    handleChange: P.func.isRequired,

}