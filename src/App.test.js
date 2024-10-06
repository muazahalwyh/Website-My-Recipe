/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Card success', () => {
  test('renders App component with NavBar, image banner, and Footer', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>   
    );
  
    screen.debug()
  
    // image banner is rendered 
    const banner = screen.getByTestId('image-banner')
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveProperty('src', 'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg')
  });
})