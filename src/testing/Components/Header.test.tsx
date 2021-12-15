import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import ReduxProvider from '../ReduxProvider';
import Header from '../../components/Header'
import '@testing-library/jest-dom/extend-expect';


describe("tests abou the Header", () => {
    it('tests that the right function has been called by clicking the first option', async() => {
      const { getAllByTestId, getByText, getByTestId } = render(<ReduxProvider><Header/></ReduxProvider>)
      fireEvent.click(getByTestId('paragraphID'))
      const options = getAllByTestId('lang-selector')
      const optionEN = options[0]
      fireEvent.click(optionEN)
      expect(getByText('EN')).toBeInTheDocument()
    })
    it('tests that the right function has been called by clicking the second option', async() => {
      const { getAllByTestId, getByText, getByTestId } = render(<ReduxProvider><Header/></ReduxProvider>)
      fireEvent.click(getByTestId('paragraphID'))
      const options = getAllByTestId('lang-selector')
      const optionDE = options[1]
      fireEvent.click(optionDE)
      expect(getByText('DE')).toBeInTheDocument()
    })
    it('tests that the right function has been called by clicking the thrird option', async() => {
      const { getAllByTestId, getByText, getByTestId } = render(<ReduxProvider><Header/></ReduxProvider>)
      fireEvent.click(getByTestId('paragraphID'))
      const options = getAllByTestId('lang-selector')
      const optionFR = options[2]
      fireEvent.click(optionFR)
      expect(getByText('FR')).toBeInTheDocument()
    })


    it('clicks the LanguageSelector button twice in the navbar and should not display the options anymore after the seconde click', async() => {
      const { getByTestId, getAllByTestId } = render(<ReduxProvider><Header/></ReduxProvider>)
      await waitFor(() =>fireEvent.click(getByTestId('paragraphID')))
      let options = getAllByTestId('lang-selector')
      const optionEN = options[0]
      const optionDE = options[1]
      const optionFR = options[2]
      await waitFor(() => fireEvent.click(getByTestId('paragraphID')))
      expect(optionEN).not.toBeInTheDocument()
      expect(optionDE).not.toBeInTheDocument()
      expect(optionFR).not.toBeInTheDocument()
    })


  })     
  