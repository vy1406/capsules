import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './components/login/Login';
import Container from './components/container/Container';
import ModalContainer from './components/modals/ModalContainer/ModalContainer';

const App = ({loggedUser}) => {

  return (
    <div>
      {console.log(loggedUser)}
      {loggedUser ? <Container /> : <Login />}
      <ModalContainer />
    </div>
  );
}

const mapDispatchToProps = {
    // login,
  };
  
const mapStateToProps = state => ({
  loggedUser: state.globalReducer.loggedUser,

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);