import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

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

const Form = () => {

    //state of list Cryptocurrency
    const [ listCrypto, saveCryptocurrency ] =  useState([]);

    const COINS = [
        { code: 'USD', name: 'Dollar of United States' },
        { code: 'MXN', name: 'Peso Mexican' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' }
    ];

    //utility useCoin - custom hook
    const [ coin, SelectCoin ] = useCoin('Choose your coin', '', COINS);

    //utility useCryptocurrency
    const [ cryptocurrency, SelectCripto ] = useCryptocurrency('Choose your cryptocurrency', '',
         listCrypto);

    //exect call to API
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);

            saveCryptocurrency(result.data.Data)
        }
        consultAPI();
    }, [])


    return ( 
        <form>
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