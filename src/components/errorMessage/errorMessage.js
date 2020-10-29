import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
    color: red;
    font-size: 18px;
    text-transform: uppercase
`
const ImgError = styled.img`
    width: 100%;
`

const ErrorMessage = () => {
    return (
        <>
            <ImgError src={'/img/error.jpg'}></ImgError>
            <Span> something go wrong</Span>
        </>
    )
}

export default ErrorMessage;