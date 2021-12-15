import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import HomePage from '../../pages/HomePage';



describe('tests abou the HomePage', () => {
    it('renders successfully HomePage', () => {
        render(<BrowserRouter>
            <Provider store={store}><HomePage/></Provider>
            </BrowserRouter>)
        const HomePageComponent = screen.getByTestId('HomePageID')
        expect(HomePageComponent).toBeInTheDocument();
    })
})
