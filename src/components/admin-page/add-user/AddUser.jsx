import React, {useState} from 'react';
import './style.scss'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Button, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {initStartDates } from '../../../utils/utils';

const START_DATES = initStartDates(7)

export default function AddUser() {
    const [team, setTeam] = React.useState("");
    const [username, setUsername] = useState("")
    const [capsula, setCapsula] = useState("")
    const [isTeamLeader, setIsTeamLeader] = useState(false)
    const [selectedSunday, setSelectedSunday] = useState("")

    const handleOnAddUser = () => {
        console.log(username, isTeamLeader, team, capsula, START_DATES[selectedSunday])
    }

    const handleChange = (event) => {
        setTeam(event.target.value);
    };

    const handleOnSelectCapsule = (event) => {
        setCapsula(event.target.value)
    }

    const handleOnSelectSunday = (event) => {
        setSelectedSunday(event.target.value)
    }
    
    const TEAMS = [{ name: 'DailyStars', id: 0}, { name: 'led Zeplin', id: 1}]
    
    const CAPSULAS = [{ name: '2,3,5', id: 0}, { name: '1,4', id: 1}]

    return (
        <div className="addUserWrap">
                <Box className="boxClassName">
                    <TextField
                        id="standard-search"
                        label="Username"
                        type="search"
                        variant="standard"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Box>
                <Box className="boxClassName">
                    <FormControl fullWidth>
                        <InputLabel id="team-simple-select-label">Teams</InputLabel>
                        <Select
                            labelId="team-simple-select-label"
                            id="team-simple-select"
                            value={team}
                            label="Team"
                            onChange={handleChange}
                        >
                        {TEAMS.map(team => (
                            <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </Box>
                <Box className="boxClassName">
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
                <Box className="boxClassName">
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
                <Box className="boxClassName">
                    <Typography>Is Team Leader</Typography>
                    <Checkbox checked={isTeamLeader} onChange={(e) => setIsTeamLeader(e.target.checked)}/>
                </Box>
                <Box className="boxClassName">
                    <Button
                        variant="contained"
                        onClick={handleOnAddUser}>
                        Add User
                    </Button>
                </Box>
               
        </div>
    );
}