import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter } from 'react-router-dom';
import ReservationCard from '../../components/ReservationCard';
import '@testing-library/jest-dom/extend-expect';
import ReduxProvider from '../ReduxProvider';
import RestaurantPage from '../../pages/restaurantPage';



describe('tests about the ReservationCard', () => {

  it("should display customer's name in the page", async() => {   
    render(
      <BrowserRouter>
      <Provider store={store}><ReservationCard name='José' index={1} /></Provider>
      </BrowserRouter>
    );  
    const div = screen.getByRole('contentinfo')
    fireEvent.click(div)
    expect(div).toHaveTextContent('José')
  });

  it('tests the onChange method that is passed in the INPUT for adding a reservation', async () => {
    const { getByTestId, getAllByText, getByText } = render(<ReduxProvider><RestaurantPage/></ReduxProvider>)
    await waitFor(() => fireEvent.change(getByTestId('inputRestaurantPageID'), { target: { value: 'José' } }))
    const addButton = getAllByText('Add')
    await waitFor(() => fireEvent.click(addButton[0]))
    const nameContainer = getAllByText('José')
    expect(nameContainer.length).toBe(2)
    await waitFor(() => fireEvent.change(getByTestId('CustomerCardInputID'), { target: { value: 'pizza' } }))
    await waitFor(() => fireEvent.click(getByTestId('CustomerCardButtonID')))
    expect(getByText('pizza')).toBeInTheDocument()

    /*
    * THIS NEXT CLICK WAS MADE TO COVER THE COVERAGE OF A  "IF" STATEMENT IN THE RESTAURANTPAGE 
    */
    fireEvent.click(addButton[0])
})   



})
