import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter } from 'react-router-dom';
import UsersCards from '../../components/Users/UsersCards';
import '@testing-library/jest-dom/extend-expect';
import { usersDataSelector } from '../../features/usersSlice'
import ReduxProvider from '../ReduxProvider';

jest.mock('../../features/usersSlice', () => {
      
  return {
    usersDataSelector: jest.fn()
  }
})

const mockedUsersDataSelector = usersDataSelector as jest.Mock

describe("tests about the UsersCards components", () => {

  it('verifies that the correct data is display in the page after clicking the Dashboard button', async() => {
    mockedUsersDataSelector.mockReturnValue([{
          name: 'Klim',
          email: 'klim.avellaneda@gmail.com'
      }])    
    const { getAllByTestId } = render(<ReduxProvider><UsersCards/></ReduxProvider>)
    const panels = getAllByTestId('PanelID')
    expect(panels[0]).toBeInTheDocument()
  }) 

  it("UsersCards should be rendered", () => {
    mockedUsersDataSelector.mockReturnValue([{
      name: 'Klim',
      email: 'klim.avellaneda@gmail.com'
  }]) 
    render(<BrowserRouter>
    <Provider store={store}><UsersCards /></Provider>
    </BrowserRouter>
    );
    const UsersCardsConponent = screen.getByTestId('UsersCardsID')
    expect(UsersCardsConponent).toBeInTheDocument();
  });

 
})  

