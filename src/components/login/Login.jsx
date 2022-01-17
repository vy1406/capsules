import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './style.scss'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log("username: ", username)
        console.log("password: ", password)
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