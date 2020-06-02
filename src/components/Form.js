import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Error from './Error';
import useCoin from '../hooks/useCoin';
import useCryptocurrency from '../hooks/useCryptocurrency';
import axios from 'axios';


//styled component 
const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = ({saveCoin, saveCryptocurrency}) => {

    //state of list Cryptocurrency
    const [ listCrypto, saveCryptocurrencys ] =  useState([]);

    //STATE Error - hook
    const [ error, saveError] = useState(false);

    const COINS = [
        { code: 'USD', name: 'Dollar of United States' },
        { code: 'MXN', name: 'Peso Mexican' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' }
    ];

    //utility useCoin - custom hook
    const [ coin, SelectCoin ] = useCoin('Choose your coin', '', COINS);

    //utility useCryptocurrency - hook
    const [ cryptocurrency, SelectCripto ] = useCryptocurrency('Choose your cryptocurrency', '',
         listCrypto);

    //exect call to API
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);

            saveCryptocurrencys(result.data.Data)
        }
        consultAPI();
    }, [])

    //when the user press submit
    const quoteCurrency = e => {
        e.preventDefault();
        

        //validate if both fields are full
        if(coin === '' || cryptocurrency === '') {
            saveError(true);
            return;
        }

        //pass the data to main component
        saveError(false);
        saveCoin(coin);
        saveCryptocurrency(cryptocurrency);
    }

    return ( 
        <form
            onSubmit={quoteCurrency}
        >
            { error ? <Error message="all the fields are required" /> : null }

            <SelectCoin />

            <SelectCripto />

            <Button 
                type="submit"
                value="calculate"
            />
        </form>
     );
}
 
export default Form;