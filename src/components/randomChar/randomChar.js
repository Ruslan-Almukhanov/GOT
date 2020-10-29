import React, {useState, useEffect} from 'react';
import './randomChar.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

function RandomChar({stateRandom}) {
    const [stateChar, setChar] = useState( {} )
    const [stateLoading, setLoading] = useState(true)
    const [stateError, setError] = useState(false)

    const got = new GotService();

    useEffect( () => {
        updateCharacters()
    }, [stateRandom])
    
    const onCharLoaded = (char) => {
        setChar(char)
        setLoading(false)
    }

    const onError = () => {
        setError({stateError: true})
        setLoading({stateLoading: false})
    }

    const updateCharacters = () => {
        const id = Math.floor(Math.random() * 100 + 22);
        got.getCharacter(id)
        .then( char => { onCharLoaded(char) } )
        .catch(onError)
    }
        const message = stateError ? <ErrorMessage/> : null;
        const spinner = stateLoading ? <Spinner/> : null;
        const content = !(stateLoading || stateError) ? <View stateChar={stateChar}/> : null;
        
        return (
            <div className="random-block rounded">
                {message}
                {spinner}
                {content}
            </div>
        );
}

export const View = ({stateChar}) => {
    const checkData = (data) => {
        if (data === '') {
            return 'no data :((';
        } else {
            return data;
        }

    }
    
    const {name, gender, culture, born, died} = stateChar
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{checkData(gender)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{checkData(born)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{checkData(died)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{checkData(culture)}</span>
                </li>
            </ul>
        </>
    )
}

export default RandomChar;
