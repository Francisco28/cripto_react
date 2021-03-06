import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';



//style component
const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Selected = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCryptocurrency = (label, stateInitial, options) => {

    //console.log(options);

    //state of our custom hook
    const [ state, updateState ] = useState(stateInitial);


    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selected
                onChange={ e => updateState(e.target.value) }
                value={state}
            >
                <option value="MXN">- Selected -</option>
                { options.map(option => ( //obtener los datos del array que retorna la API
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                )) }
            </Selected>
        </Fragment>
    );

    //Return state, interface and function that modify the state
    return [ state, SelectCripto, updateState ];
}


export default useCryptocurrency;