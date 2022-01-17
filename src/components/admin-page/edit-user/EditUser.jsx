import React, {useState} from 'react';
import './style.scss'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { initStartDates } from '../../../utils/utils';
import { DUMMY_USERS } from '../../../utils/constants';

const START_DATES = initStartDates(7)

export default function EditUser({ onDeleteUser }) {
    const [user, setUser] = useState("");
    const [capsula, setCapsula] = useState("")
    const [selectedSunday, setSelectedSunday] = useState("")

    const handleOnEditUser = () => {
        console.log(user, capsula, START_DATES[selectedSunday])
    }

    const handleChange = (event) => {
        setUser(event.target.value);
    };

    const handleOnSelectCapsule = (event) => {
        setCapsula(event.target.value)
    }

    const handleOnSelectSunday = (event) => {
        setSelectedSunday(event.target.value)
    }
    
    const handleOnDeleteUser = () => {
        onDeleteUser(user)
    }
    
    const CAPSULAS = [{ name: '2,3,5', id: 0}, { name: '1,4', id: 1}]

    return (
        <div className="userCapsulesWrap">
                        
                <Box sx={{ marginTop: "20px", width: "300px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="user-simple-select-label">Users</InputLabel>
                        <Select
                            labelId="user-simple-select-label"
                            id="user-simple-select"
                            value={user}
                            label="User"
                            onChange={handleChange}
                        >
                        {DUMMY_USERS.map(user => (
                            <MenuItem key={user.id} value={user.id}>{user.username}</MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </Box>
                <Box sx={{ marginTop: "20px", width: "300px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="capsules-simple-select-label">Capsules</InputLabel>
                        <Select
                            labelId="capsules-simple-select-label"
                            id="capsules-simple-select"
                            value={capsula}
                            label="Capsules"
                            onChange={handleOnSelectCapsule}
                        >
                        {CAPSULAS.map(capsula => (
                            <MenuItem key={capsula.id} value={capsula.id}>{capsula.name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ marginTop: "20px", width: "300px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="sunday-simple-select-label">Start Capsula</InputLabel>
                        <Select
                            labelId="sunday-simple-select-label"
                            id="sunday-simple-select"
                            value={selectedSunday}
                            label="Capsules"
                            onChange={handleOnSelectSunday}
                        >
                        {START_DATES.map(sunday => (
                            <MenuItem key={sunday.id} value={sunday.id}>{sunday.name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Box>
                <Button
                    variant="contained"
                    onClick={handleOnEditUser}>
                    Edit User
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleOnDeleteUser}>
                    Delete User
                </Button>
        </div>
    );
}