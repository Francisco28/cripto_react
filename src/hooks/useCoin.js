import React, { Fragment, useState } from 'react';

const useCoin = () => {

    //state of our custom hook
    const [ state, updateState ] = useState('');


    const Select = () => (
        <Fragment>
            <label>Coin</label>
            <select>
                <option value="MXN">Mexican peso</option>
            </select>
        </Fragment>
    );

    //Return state, interface and function that modify the state
    return [ state, Select, updateState ];
}


export default useCoin;