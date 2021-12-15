import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import About from '../../pages/About';


describe("tests about the AboutPage", () => {
    it('renders successfully AboutPage', () => {
        render(<BrowserRouter>
            <Provider store={store}><About/></Provider>
            </BrowserRouter>)
        const AboutPageComponent = screen.getByTestId('AboutPageID')
        expect(AboutPageComponent).toBeInTheDocument();
    })
})

