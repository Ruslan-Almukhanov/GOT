import React from 'react';
import RandomChar from './randomChar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test <RandomChar/> component', async () => {
    it('RandomChar rendered corectly', () => {
        const randomChar = render(<RandomChar />)
        expect(randomChar).toMatchSnapshot()
    })
    it('RandomChar have rendered correctly', async () => {
        const { findByText } = render(<RandomChar />);
        const btn = await findByText(/Random/)
        expect(btn).toBeInTheDocument();
    })
})

