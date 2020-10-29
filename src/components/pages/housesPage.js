import React, {useState} from 'react';
import RowBlock from '../rowBlock/rowBlock';
import GotService from '../../services/gotService';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails/itemDetails'

const HousesPage = () => {
    const got = new GotService();

    const [stateHouseSelected, setHouseSelected] = useState(2)

    const onHouseSelected = (id) => {
        setHouseSelected(id)
    }

    const itemList = (
        <ItemList
            renderItem={(item) => `${item.name}`}
            getData={got.getAllHouses} 
            onItemSelected={onHouseSelected}/>
    )

    const itemDetails = (
        <ItemDetails
            getData={got.getHouse} 
            itemSelected={stateHouseSelected}>
                <Field field='name' label='name'/>
                <Field field='region' label='region'/>
        </ItemDetails>
    )
        
        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
}

export default HousesPage;