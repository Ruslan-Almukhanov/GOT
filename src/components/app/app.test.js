import React from 'react';
import App from './app';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Testing <App/>', () => {
    it('check toggle button in the document', async () => {
        const {getByText} = await render(<App/>)
        const btn = getByText(/Toogle/)
        screen.debug()
    })
})