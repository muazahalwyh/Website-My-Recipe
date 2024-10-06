import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Card from './Card'; // Adjust the path as necessary

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'], // You can include more if you want
  id: 1
};

test('renders the component Card & given props', () => {
  render(<Card el={el} />);

  // Check if the image is rendered correctly
  expect(screen.getByAltText('Test Recipe')).toHaveAttribute('src', el.image);

  // Check if the name is rendered correctly
  expect(screen.getByText('Test Recipe')).toBeInTheDocument();

  // Check if the rating is rendered correctly
  expect(screen.getByText('4.5')).toBeInTheDocument();

  // Check if the tags are rendered correctly
  el.tags.slice(0, 2).forEach((tag) => {
    expect(screen.getByText(tag)).toBeInTheDocument();
  });
});
