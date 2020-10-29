import React from 'react';
import GotService from '../../services/gotService';
import ItemList from '../itemList/itemList';
import {withRouter} from 'react-router-dom';

const BooksPage = (props) => {
    const got = new GotService();

        return (
            <ItemList
                renderItem={(item) => `${item.name}`}
                getData={got.getAllBooks} 
                onItemSelected={(itemId) => {
                    props.history.push(itemId)
                } }/>
        )
}

export default withRouter(BooksPage);