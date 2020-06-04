import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span { 
        font-weight: bold;
    }

`;

const Price = styled.p`
    font-size: 30px;

    span { 
        font-weight: bold;
    }
`;

const Quotation = ({result}) => {
    //if the object is empty
    if(Object.keys(result).length === 0) return null;
    
    console.log(result);

    return ( 

        <ResultDiv>
            <Price>The price is: <span>{result.PRICE}</span></Price>
            <Info>High day: <span>{result.HIGHDAY}</span></Info>
            <Info>Low day: <span>{result.LOWDAY}</span></Info>
            <Info>Change 24 hour: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span></Info>
        </ResultDiv>

     );
}
 
export default Quotation;