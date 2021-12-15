import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardCards from '../../components/Dashboard/DashboardCards';
import ReduxProvider from '../ReduxProvider';
import '@testing-library/jest-dom/extend-expect';
import { dashboardDataSelector } from '../../features/dashboardSlice';
import { Provider } from 'react-redux'
import { store } from '../../app/store';
import { BrowserRouter } from 'react-router-dom';


jest.mock('../../features/dashboardSlice', () => {
      
    return {
      dashboardDataSelector: jest.fn()
    }
})

const mockedDashboardDataSelector = dashboardDataSelector as jest.Mock

describe("tests about the Dashboard components", () => {
  
    it('verifies that the correct data is display in the page after clicking the Dashboard button', async() => {
        mockedDashboardDataSelector.mockReturnValue([{
            id: 'id',
            name: 'Klim',
            Locale: 'anyLocale',
            Amount: 'anyAmount'
        }])    
      const { getAllByTestId } = render(<ReduxProvider><DashboardCards/></ReduxProvider>)
      const panels = getAllByTestId('PanelID')
      expect(panels[0]).toBeInTheDocument()
    }) 

/* fare che si rendirizzino tutti i dati e che arrivino piu di un panel*/ 

    it("UsersCards should be rendered", () => {
      mockedDashboardDataSelector.mockReturnValue([{
        id: 'id',
        name: 'Klim',
        email: 'klim.avellaneda@gmail.com',
        Amount: 'anyAmount'
    }]) 
      render(<BrowserRouter>
      <Provider store={store}><DashboardCards /></Provider>
      </BrowserRouter>
      );
      const UsersCardsConponent = screen.getByTestId('DashboardCardsID')
      expect(UsersCardsConponent).toBeInTheDocument();
    });
   
})  


