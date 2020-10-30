import React from 'react'
import ErrorMessage from './errorMessage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Component <errorMessage/> rendered correctly', () => {
    it('rendered correctly', () => {
        const errorMessage = render(<ErrorMessage />)
        expect(errorMessage).toMatchSnapshot();
    })
    it('image corectly rendered', () => {
        const { getByTestId } = render(<ErrorMessage />)
        expect(getByTestId('img-error')).toBeTruthy()
    })
})