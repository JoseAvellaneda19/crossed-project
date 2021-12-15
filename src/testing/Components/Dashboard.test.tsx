import axios from 'axios'
import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import BoardPage from '../../pages/BoardPage';
import ReduxProvider from '../ReduxProvider'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>


describe('ErrorMessage with a message', () => {   
   
   
    it('the ErrorMessage should be in the document after clicking the dashboard tab and rejecting the Axios.get with a mock', async () => {
        const message = 'Rejected'
        mockedAxios.get.mockRejectedValueOnce(new Error(message))

        const { getByTestId, getByText } = render(<ReduxProvider><BoardPage/></ReduxProvider>)
        await waitFor(() => fireEvent.click(getByTestId('SideBarDashboardTapID')))
        const errorMessage = getByText('Rejected')
        expect(errorMessage).toBeInTheDocument()
    } )
  

    it('the ErrorMessage should be in the document after clicking the Users tab and rejecting the Axios.get with a mock', async () => {
        const message = 'Rejected'
        mockedAxios.get.mockRejectedValueOnce(new Error(message))

        const { getByTestId, getByText } = render(<ReduxProvider><BoardPage/></ReduxProvider>)
        await waitFor(() => fireEvent.click(getByTestId('SideBarUsersTapID')))
        const errorMessage = getByText('Rejected')
        expect(errorMessage).toBeInTheDocument()
    } )
   
} )  


