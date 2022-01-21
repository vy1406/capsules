import React, { useState } from 'react';

import Login from './components/login/Login';
import Container from './components/container/Container';
import ModalContainer from './components/modals/ModalContainer/ModalContainer';

export default function App() {
  export default function App() {
  const [isLogged, setIsLogged] = useState(false)

  const handleOnLogin = ( username, password) => {
    console.log(username, password)
    setIsLogged(true)
  }

  return (
    <div>
      {isLogged ? <Container /> : <Login onLogin={handleOnLogin}/>}
      <ModalContainer />
    </div>
  );
}