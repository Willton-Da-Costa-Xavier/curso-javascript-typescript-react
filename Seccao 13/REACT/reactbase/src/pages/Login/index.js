import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';

export default function Login() {
  const dispacth = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispacth({
      type: 'Botao_Clicado',
    });

    dispacth({
      type: 'Botao_Clicado2',
    });
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
