import { render, screen } from '@testing-library/react';
import React from 'react';
import RestaurantPage from '../../pages/restaurantPage';
import ReduxProvider from '../ReduxProvider';
import { reservationSelector } from '../../features/reservationSlice';
import { customerSelector } from '../../features/customerSlice'


jest.mock('../../features/reservationSlice', () => {
    return{
        reservationSelector: jest.fn()
    }
})

jest.mock('../../features/customerSlice', () => {
    return{
        customerSelector: jest.fn()
    }
})

const mockedReservationSelector = reservationSelector as jest.Mock
const mockedCustomerSelector = customerSelector as jest.Mock



describe("tests about the RestaurantPage", () => {

    it('renders the reservation and customer components', async () => {
        mockedReservationSelector.mockReturnValue(['Klim'])
        mockedCustomerSelector.mockReturnValue([{
               id: 1,
               name: 'Klim',
               food: ['rice', 'bistecca', 'faggioli']
            }])
        const { getAllByText } = render(<ReduxProvider><RestaurantPage /></ReduxProvider>)
        expect(getAllByText('Klim')[0]).toBeInTheDocument()
    })

    it('renders successfully RestaurantPage', () => {
        render(<ReduxProvider><RestaurantPage/></ReduxProvider>)
        const RestaurantPageComponent = screen.getByTestId('RestaurantPageID')
        expect(RestaurantPageComponent).toBeInTheDocument();
    })

      
})


