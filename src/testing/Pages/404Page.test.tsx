import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Page404 from '../../pages/Page404';

   
describe("test about the 404Page", () => {
    it('renders successfully 404Page', () => {
        render(<BrowserRouter>
            <Provider store={store}><Page404 /></Provider>
            </BrowserRouter>)
        const Page404Component = screen.getByTestId('Page404ID')
        expect(Page404Component).toBeInTheDocument();
    })
    
})
