import React from 'react';
import RandomChar from './randomChar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test <RandomChar/> component', () => {
    it('RandomChar have rendered correctly', async () => {
        const {findByText, debug} = render(<RandomChar/>);  
        expect(await findByText(/Random/)).toBeInTheDocument();
    })
})
    
