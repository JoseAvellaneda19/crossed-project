import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import BoardPage from '../../pages/BoardPage';
import ReduxProvider from '../ReduxProvider'


describe("tests about the BoardPage", () => {
    it('renders successfully BoardPage', () => {
        render(<ReduxProvider><BoardPage/></ReduxProvider>)
        const BoardPageComponent = screen.getByTestId('BoardPageID')
        expect(BoardPageComponent).toBeInTheDocument();
    })

    it('display the data succesfully when the DASHBOARD button is clicked', async () => {
        const { getByTestId, getAllByTestId, getByText } = render(<ReduxProvider><BoardPage/></ReduxProvider>)
        let panels   
        await waitFor(() => fireEvent.click(getByTestId('SideBarDashboardTapID')))
        await waitFor(() => { panels = getAllByTestId('PanelID')})
        const successMessage = getByText('Fetched data correctly')
        expect(panels).toHaveLength(10)
        expect(successMessage).toBeInTheDocument()
        
    })

    it('display the data succesfully when the USERS button is clicked', async () => {
        const { getByTestId, getAllByTestId, getByText } = render(<ReduxProvider><BoardPage/></ReduxProvider>)
        let panels
        await waitFor(() => fireEvent.click(getByTestId('SideBarUsersTapID')))
        await waitFor(() => { panels = getAllByTestId('PanelID')})
        const successMessage = getByText('Fetched data correctly')
        expect(panels).toHaveLength(10)
        expect(successMessage).toBeInTheDocument()
        
    })


   
})
