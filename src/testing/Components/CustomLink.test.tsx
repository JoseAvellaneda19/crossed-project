import React from 'react';
import { render, screen } from '@testing-library/react';
import  CustomLink  from '../../components/Button/CustomLink';
import '@testing-library/jest-dom/extend-expect';

describe('tests about the CustomLink', () => {

  it("should have the correct label", () => {
    render(<CustomLink label='home' to="home" />);
    const button = screen.getByText("home");
    expect(button).toBeInTheDocument();
  });

})
