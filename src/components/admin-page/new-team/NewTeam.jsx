import React, {useState} from 'react';
import './style.scss'
import { TextField, Button, Box } from '@mui/material';

export default function NewTeam({onAddTeam}) {
    const [teamName, setTeamName] = useState("")

    const handleOnNewTeam = () => {
        onAddTeam({ name: teamName })
    }

    return (
        <div className="newTeamWrap">
            <Box className="boxClassName">
                <TextField
                    id="standard-search"
                    label="Team name"
                    type="search"
                    variant="standard"
                    onChange={(e) => setTeamName(e.target.value)}
                    />
            </Box>
            <Box className="boxClassName">
             <Button
                    variant="contained"
                    onClick={handleOnNewTeam}>
                    Add Team
                </Button>
            </Box>      
        </div>
    );
}