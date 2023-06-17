import React from 'react';
import { render, screen } from "@testing-library/react";
import { MovieCard } from './index';
import { describe, it, expect } from '@jest/globals';

const props = {
    title: 'title 1',
    poster_path: '/img/img.jpg'

}

describe('<MovieCard/>', () => {
  
    it('should render the menu with the links', () => {
        render(<MovieCard />);
        const card = screen.getByRole('link', { name: /Assistir/i });
  
        expect(card).toBeInTheDocument();
    })

    it('should render MovieCard corretly', () => {
        render(<MovieCard {...props} />);
        const title = screen.getByRole('heading', { name: props.title, level: 4 });
       
        expect(title).toBeInTheDocument();

    })
});