import React from 'react';
import { connect } from 'react-redux';
import Login from './components/login/Login';
import Container from './components/container/Container';
import ModalContainer from './components/modals/ModalContainer/ModalContainer';
import Loader from './components/modals/Loader/Loader';
import ErrorModal from './components/modals/ErrorModal/ErrorModal';

const App = ({loggedUser}) => {

  return (
    <div>
      {console.log(loggedUser)}
      {loggedUser ? <Container /> : <Login />}
      <Loader />
      <ErrorModal />
      <ModalContainer />
    </div>
  );
}

const mapDispatchToProps = {
    // login,
  };
  
const mapStateToProps = state => ({
  loggedUser: state.globalReducer.loggedUser,
  isLoading: state.globalReducer.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);