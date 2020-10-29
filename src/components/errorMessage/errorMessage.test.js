import React from 'react'
import ErrorMessage from './errorMessage';
import { render } from '@testing-library/react';

describe('Component <errorMessage/> rendered correctly', () => {
    it('rendered', () => {
        render(<ErrorMessage/>)
    })
})