import React from 'react';
import Header from './header'
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('testing <Header/>', () => {
    it('<Header renders corectly', () => {
        const header = render(<Router><Header /></Router>)
        expect(header).toMatchSnapshot();
    })
    it('logo rendered corectly', () => {
        const { getByText } = render(<Router><Header /></Router>)
        const logo = getByText(/Game of Thrones DB/)
        expect(logo).toBeTruthy()
    })
    it('menu rendered corectly', () => {
        const { getByTestId } = render(<Router><Header /></Router>)
        expect(getByTestId('test-menu')).toBeTruthy()
    })
})