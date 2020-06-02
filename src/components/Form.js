import React from 'react';
import styled from '@emotion/styled';

import useCoin from '../hooks/useCoin';

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

    //utility useCoin - custom hook
    const [ coin, SelectCoin, updateState ] = useCoin();

    return ( 
        <form>
            <SelectCoin />

            <Button 
                type="submit"
                value="calculate"
            />
        </form>
     );
}
 
export default Form;