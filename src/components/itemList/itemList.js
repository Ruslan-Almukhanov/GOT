import React from 'react';
import UpdatedComponent from '../pages/withCounter'
import './itemList.css';

const ItemList = (props) => {
    const renderItems = (arr) => {
        return arr.map((item, id) => {
            const label = props.renderItem(item);
            const url = item.url;
            const itemId = url.match(/\d/g).join('')
            return (
                <li 
                    key={id}
                    onClick={ () => props.onItemSelected(itemId) }
                    className="list-group-item">
                    {label}
                </li>
            )
        })
    }

    const { data } = props;
    const items = renderItems(data)

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default UpdatedComponent(ItemList)