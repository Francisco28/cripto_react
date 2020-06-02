import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form';

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width:992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
`;

const Image = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Heading = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-align: left;
    font-weight: 700px;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;

    &::after {
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66A2FE;
      display: block;
    }
`;

function App() {

  //states
  const [ coin, saveCoin ] = useState('');
  const [ cryptocurrency, saveCryptocurrency ] = useState('');

  useEffect( () => {

    //evitamos la ejecucion la primera vez
    if(coin === '') return;

    console.log('Cotizando..');

  }, [coin, cryptocurrency]);

  return (
    <Container>
      <div>
          <Image 
            src={image}
            alt="image cripto"
          />
      </div>
      <div>
          <Heading>
            Quote cryptocurrencies at the moment
          </Heading>

          <Form 
            saveCoin={saveCoin}
            saveCryptocurrency={saveCryptocurrency}
          />
      </div>
    </Container>
  );
}

export default App;
