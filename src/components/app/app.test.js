import React from 'react';
import App from './app';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Testing <App/>', () => {
    it('check <App/> rendering', async () => {
        const app = await render(<App/>)
        expect(app).toMatchSnapshot();
    })
    it('check toggle button in the document', async () => {
        const {getByText} = await render(<App/>)
        const btn = getByText(/Random character/)
        expect(btn).toBeTruthy()
    })
})