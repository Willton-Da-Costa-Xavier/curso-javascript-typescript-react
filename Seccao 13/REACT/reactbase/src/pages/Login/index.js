import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';
import * as exampleAction from '../../store/modules/example/actions';

export default function Login() {
  const dispacth = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispacth(exampleAction.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Loren6</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
