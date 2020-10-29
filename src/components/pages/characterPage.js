import React, {useState} from 'react';
import RowBlock from '../rowBlock/rowBlock';
import GotService from '../../services/gotService';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails/itemDetails'

const CharacterPage = () => {
    const got = new GotService();
    const [stateCharSelected, setCharSelected] = useState(130)

    const onItemSelected = (id) => {
        setCharSelected(id)
    }
        
    const itemList = (
        <ItemList
            renderItem={(item) => `${item.name} (${item.gender})`}
            getData={got.getAllCharacters} 
            onItemSelected={onItemSelected}/>
    )

    const itemDetails = (
        <ItemDetails
            getData={got.getCharacter} 
            itemSelected={stateCharSelected}>
                <Field field='gender' label='gender'/>
                <Field field='born' label='born'/>
                <Field field='died' label='died'/>
                <Field field='culture' label='culture'/>
        </ItemDetails>
    )
        
        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
}

export default CharacterPage;