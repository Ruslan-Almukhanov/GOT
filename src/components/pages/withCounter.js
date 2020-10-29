import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner';


const UpdatedComponent = OriginalComponent => {
    const NewComponent = (props) => {

        const [stateItemList, setItemList] = useState()

        useEffect(() => {
            const { getData } = props;
            getData()
                .then((itemlist) => {
                    setItemList(itemlist)
                })
        }, [])

        if (!stateItemList) {
            return <Spinner />
        }

        return <OriginalComponent
            onItemSelected={props.onItemSelected}
            renderItem={props.renderItem}
            data={stateItemList} />
    }
    return NewComponent
}

export default UpdatedComponent;