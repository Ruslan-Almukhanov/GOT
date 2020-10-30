import React from 'react';
import HomePage from './homePage';
import { render } from '@testing-library/react';

describe('Component <HomePage/>', () => {
    test('Home page rendered correctly', () => {
        const { getByText, getByRole } = render(<HomePage />);
        expect(getByText(/Welcome to the Game Of Thrones/)).toBeInTheDocument;
        getByRole('heading')
    });
})