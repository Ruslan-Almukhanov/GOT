import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './itemDetails.css';
import ErrorMessage from '../errorMessage/errorMessage';

const Details = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`

const Field = ({ stateItemInfo, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{field}</span>
            <span>{stateItemInfo[label]}</span>
        </li>
    )
}

export {
    Field
}

const ItemDetails = (props) => {

    const [stateItemInfo, setItemInfo] = useState()
    const [stateError] = useState(false)
    const [itemId, setItemId] = useState(props.itemSelected)

    useEffect(() => {
        setItemId(props.itemSelected)
    }, [props.itemSelected])

    useEffect(() => {
        updateChar();
    }, [itemId])

    const updateChar = () => {
        const itemId = props.itemSelected;
        const getData = props.getData;

        if (!itemId) {
            return
        }

        getData(itemId)
            .then((itemInfo) => {
                setItemInfo(itemInfo)
            })
    }

    if (stateError) {
        return (<ErrorMessage />)
    }

    if (!stateItemInfo) {

        return <span className='select-error'>Please select a character</span>
    }

    const { name } = stateItemInfo

    return (
        <Details className="rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, { stateItemInfo })
                })}
            </ul>
        </Details>
    );
}

export default ItemDetails;