import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { connect } from 'react-redux';
import { login } from '../../store/actions'
import './style.scss'

const Login = ( {
    login
})  => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log(username, password)
        login({username: 'vova', password: "123"})
    }

    return (
        <div className="loginWrap">
            <TextField
                id="standard-search"
                label="Username"
                type="search"
                variant="standard"
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                onClick={handleLogin}>
                Login
            </Button>
        </div>
    );
}


const mapDispatchToProps = {
    login,
  };
  
const mapStateToProps = state => ({
// userData: state.globalReducer.userData,
// modalType: state.globalReducer.modalType,
// isModalOpen: state.globalReducer.isModalOpen,
// modalData: state.globalReducer.modalData
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(Login);