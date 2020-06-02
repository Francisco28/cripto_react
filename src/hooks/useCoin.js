import React, { Fragment, useState } from 'react';

const useCoin = (label, stateInitial, options) => {

    //state of our custom hook
    const [ state, updateState ] = useState(stateInitial);


    const Select = () => (
        <Fragment>
            <label>{label}</label>
            <select
                onChange={ e => updateState(e.target.value) }
                value={state}
            >
                <option value="MXN">- Selected -</option>
                { options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                )) }
            </select>
        </Fragment>
    );

    //Return state, interface and function that modify the state
    return [ state, Select, updateState ];
}


export default useCoin;