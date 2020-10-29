import React from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails/itemDetails'

const BookDetails = ({idBook}) => {
    const got = new GotService();
    
        return (
            <ItemDetails
                getData={got.getBook} 
                itemSelected={idBook}>
                    <Field field='name' label='name'/>
                    <Field field='author' label='authors'/>
            </ItemDetails>
        )
}

export default BookDetails
