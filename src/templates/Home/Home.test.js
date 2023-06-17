import React from 'react';
import { render } from '@testing-library/react';
import Home from './Index';
import { test } from '@jest/globals';

test('renders learn react link', () => {
  render(<Home />);
  
});
