import React from 'react';
import { render, screen } from '@testing-library/react';
import AppHeader from '../../components/AppHeader/AppHeader'
import '@testing-library/jest-dom/extend-expect';


describe('tests about the AppHeader', () => {

  it("AppHeader should be in the document", () => {
    render(<AppHeader />);
    const AppHeaderConponent = screen.getByTestId('AppHeader')
    expect(AppHeaderConponent).toBeInTheDocument();
  });
  
})