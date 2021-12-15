import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReduxProvider from "../ReduxProvider";
import AppSideNav from "../../components/AppSideNav/AppSideNav";



describe('tests in the AppSideNav component', () => {

    it('should have the DATA-ACTIVE attribute ACTIVE by clicking the Dasboard tab', async() => {
        const { getByTestId } = render(<ReduxProvider><AppSideNav/></ReduxProvider>)
        const tabLink = getByTestId('SideBarDashboardTapID')
        fireEvent.click(tabLink)
        expect(tabLink).toHaveAttribute('data-active', 'active')
    })

    it('should have the DATA-ACTIVE attribute ACTIVE by clicking the Users tab', async() => {
        const { getByTestId } = render(<ReduxProvider><AppSideNav/></ReduxProvider>)
        const tabLink = getByTestId('SideBarUsersTapID')
        fireEvent.click(tabLink)
        expect(tabLink).toHaveAttribute('data-active', 'active')
    })

    it('should have the DATA-ACTIVE attribute ACTIVE by clicking the Reporst tab', async() => {
        const { getByTestId } = render(<ReduxProvider><AppSideNav/></ReduxProvider>)
        const tabLink = getByTestId('SideBarReportsTapID')
        fireEvent.click(tabLink)
        expect(tabLink).toHaveAttribute('data-active', 'active')
    })

    it('should have the DATA-ACTIVE attribute ACTIVE by clicking the Bug-Request tab', async() => {
        const { getByTestId } = render(<ReduxProvider><AppSideNav/></ReduxProvider>)
        const tabLink = getByTestId('SideBarBugRequestsTapID')
        fireEvent.click(tabLink)
        expect(tabLink).toHaveAttribute('data-active', 'active')
    })
})