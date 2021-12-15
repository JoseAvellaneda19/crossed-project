import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CustomerCard from '../../components/CustomerCard';
import ReduxProvider from '../ReduxProvider'
import '@testing-library/jest-dom/extend-expect';



describe('tests about the CustomerCard', () => {

  it("should make appear the food in the container after it was inserted", () => {   

    const food: string[] = ['pasta', 'riso', 'fagioli'] 
    render(<ReduxProvider><CustomerCard name='José' id='testid' food={food} /></ReduxProvider>)
       
    const button = screen.getByTestId('CustomerCardButtonID')
    act(() => { fireEvent.click(button) })

    const foodContainerPasta = screen.getByText('pasta')
    const foodContainerRiso = screen.getByText('riso')
    const foodContainerFagioli = screen.getByText('fagioli')

    expect(foodContainerPasta).toBeInTheDocument()
    expect(foodContainerRiso).toBeInTheDocument()
    expect(foodContainerFagioli).toBeInTheDocument()
   
  });

  

})
  
  
  