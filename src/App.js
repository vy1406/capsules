import React from 'react';

import Login from './components/login/Login';
import Container from './components/container/Container';
import ModalContainer from './components/modals/ModalContainer/ModalContainer';

export default function App() {
  return (
    <div>
      <Login />
      <Container />
      <ModalContainer />
    </div>
  );
}